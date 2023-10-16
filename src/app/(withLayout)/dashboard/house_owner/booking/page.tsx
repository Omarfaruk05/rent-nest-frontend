"use client";

import Loading from "@/app/loading";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
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
    query["ownerId"] = id;
  }

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetBookingsQuery({ ...query });
  const [deleteBooking] = useDeleteBookingMutation();
  const [updateBooking] = useUpdateBookingMutation();

  const bookings = data?.bookings;
  const meta = data?.meta;
  console.log(bookings);

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
  const updateHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const updatedData = {
        id,
        body: { bookingStatus: "ACCEPTED" },
      };
      const res = await updateBooking(updatedData);
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
          <div>
            <p>{data.house.name}</p>
            <img src={data.house.houseImage} alt="houseImage" />
          </div>
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
      title: "Update",
      render: function (data: any) {
        return data?.bookingStatus !== "ACCEPTED" ? (
          <Button
            style={{
              margin: "0px 5px",
            }}
            onClick={() => updateHandler(data?.id)}
            type="primary"
          >
            Make Booked
          </Button>
        ) : (
          <Button
            style={{
              margin: "0px 5px",
            }}
            disabled
          >
            Booked
          </Button>
        );
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => deleteHandler(data?.id)} type="primary" danger>
            <DeleteOutlined />
          </Button>
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

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
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
