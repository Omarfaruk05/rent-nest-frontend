/* eslint-disable @next/next/no-img-element */
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
import {
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Image, message } from "antd";
import UMTable from "@/components/ui/UMTable";
import ActionBar from "@/components/ui/ActionBar";

const HousePage = () => {
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

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetHousesQuery({ ...query });
  const [deleteHouse] = useDeleteHouseMutation();

  const houses = data?.houses;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteHouse(id);
      if (res) {
        message.success("House Deleted Successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "House Image",
      render: function (data: any) {
        return (
          <Image
            className="rounded-md"
            width={100}
            src={data?.houseImage[0]}
            alt="houseImage"
          />
        );
      },
    },
    {
      title: "House Name",
      dataIndex: "name",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Owner",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.owner?.name}</p>;
      },
      sorter: true,
    },

    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
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
      <ActionBar title="All Houses"></ActionBar>

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

export default HousePage;
