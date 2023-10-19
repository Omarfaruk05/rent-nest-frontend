"use client";

import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteBookingMutation,
  useGetBookingsQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";
import ActionBar from "@/components/ui/ActionBar";
import Loading from "@/app/loading";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useMakeAdminMutation,
} from "@/redux/api/userApi";
import {
  useDeleteReviewMutation,
  useGetReviewsQuery,
} from "@/redux/api/reivewApi";

const HouseOwnerPage = () => {
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

  const { data, isLoading } = useGetReviewsQuery({ ...query });
  const [deleteReview] = useDeleteReviewMutation();

  const users = data?.reviews;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteReview(id).unwrap();
      if (res?.id) {
        message.success("Review Deleted successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Reviewer",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.user?.name}</p>;
      },
    },
    {
      title: "Reviewer Email",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.user?.email}</p>;
      },
    },
    {
      title: "Reivew",
      dataIndex: "review",
    },
    {
      title: "Rating",
      dataIndex: "rating",
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
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;

    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="m-2">
      <ActionBar title="All House Owners"></ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={users}
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

export default HouseOwnerPage;
