"use client";

import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import UMTable from "@/components/ui/UMTable";

import { useDeleteBlogMutation, useGetBlogsQuery } from "@/redux/api/blogApi";
import Loading from "@/app/loading";
import ActionBar from "@/components/ui/ActionBar";
import { useDeleteFAQMutation, useGetFAQQuery } from "@/redux/api/faqApi";

const FaqPage = () => {
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

  const { data, isLoading } = useGetFAQQuery({ ...query });
  const [deleteFaq] = useDeleteFAQMutation();

  const faqs = data?.faq;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteFaq(id).unwrap();
      if (res?.id) {
        message.success("Feedback Deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "User",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.user?.name}</p>;
      },
    },
    {
      title: "Email",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.user?.email}</p>;
      },
    },
    {
      title: "FAQ Question",
      dataIndex: "question",
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
      <ActionBar title="All Faqs"></ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={faqs}
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

export default FaqPage;
