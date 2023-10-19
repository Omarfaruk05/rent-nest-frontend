"use client";

import Loading from "@/app/loading";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import React, { useState } from "react";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Image, message } from "antd";
import UMTable from "@/components/ui/UMTable";
import ActionBar from "@/components/ui/ActionBar";
import {
  useDeleteBookingMutation,
  useGetBookingsQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";

const HouseBookingPage = () => {
  const { id, role } = getUserInfo() as any;
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!role) {
    query["userId"] = id;
  }

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetBookingsQuery({ ...query });
  const [deleteBooking] = useDeleteBookingMutation();

  const bookings = data?.bookings;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      console.log(data);
      const res = await deleteBooking(id);
      if (res) {
        message.success("Booking Deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "House Name",
      dataIndex: "",
      render: function (data: any) {
        return (
          data.house.houseImage && (
            <div>
              <p>{data.house.name}</p>
              <Image width={50} src={data.house.houseImage} alt="houseImage" />
            </div>
          )
        );
      },
    },
    {
      title: "City",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data.house.city}</p>;
      },
    },
    {
      title: "Status",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data.house.status}</p>;
      },
    },
    {
      title: "Booked By",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data.user.name}</p>;
      },
    },
    {
      title: "Status",
      dataIndex: "",
      render: function (data: any) {
        return (
          <Button className="bg-teal-300 text-black" disabled>
            {data?.bookingStatus}
          </Button>
        );
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return data?.bookingStatus !== "ACCEPTED" ? (
          <Button onClick={() => deleteHandler(data?.id)} type="primary" danger>
            <DeleteOutlined />
          </Button>
        ) : (
          <div className="bg-green-300 w-8 h-8 text-center pt-1 text-white rounded-full">
            <CheckOutlined />
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="m-2">
      <ActionBar
        title="Client Booked This Houses
      "
      ></ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={bookings}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default HouseBookingPage;
