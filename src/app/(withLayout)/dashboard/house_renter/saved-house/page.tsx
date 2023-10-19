"use client";

import Loading from "@/app/loading";
import {
  useDeleteHouseMutation,
  useGetHousesQuery,
} from "@/redux/api/houseApi";
import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import React, { useState } from "react";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Button, Image, message } from "antd";
import UMTable from "@/components/ui/UMTable";
import ActionBar from "@/components/ui/ActionBar";
import {
  useDeleteSavedHouseMutation,
  useGetSavedHousesQuery,
} from "@/redux/api/savedHouseApi";

const SavedHousePage = () => {
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

  const { data, isLoading } = useGetSavedHousesQuery({ ...query });
  const [deleteSavedHouse] = useDeleteSavedHouseMutation();

  const houses = data?.savedHouses;
  const meta = data?.meta;
  console.log(data);

  const deleteHandler = async (id: string) => {
    try {
      const res = await deleteSavedHouse(id);
      if (res) {
        message.success("Cart item deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "House Image",
      dataIndex: "",
      render: function (data: any) {
        return (
          <Image
            width={100}
            src={data?.house?.houseImage[0]}
            alt="HouseImage"
          />
        );
      },
    },
    {
      title: "House Name",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.house?.name}</p>;
      },
    },
    {
      title: "City",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.house?.city}</p>;
      },
    },
    {
      title: "Status",
      dataIndex: "",
      render: function (data: any) {
        return (
          <Button
            disabled
            size="small"
            className="bg-cyan-200 text-center rounded-lg text-dark"
          >
            {data?.house?.status}
          </Button>
        );
      },
    },
    {
      title: "Rent/Month",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.house?.rentPerMonth}</p>;
      },
      sorter: true,
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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="m-2">
      <ActionBar title="My Saved Houses."></ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={houses}
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

export default SavedHousePage;
