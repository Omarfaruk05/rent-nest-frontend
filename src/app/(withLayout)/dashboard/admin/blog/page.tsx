"use client";

import dayjs from "dayjs";
import { getUserInfo } from "@/services/auth.service";
import React, { useState } from "react";
import {
  DeleteOutlined,
  ArrowRightOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Image, message } from "antd";
import UMTable from "@/components/ui/UMTable";
import ActionBar from "@/components/ui/ActionBar";
import Loading from "@/app/loading";
import { useDeleteBlogMutation, useGetBlogsQuery } from "@/redux/api/blogApi";
import Link from "next/link";

const BlogPage = () => {
  const { id, role } = getUserInfo() as any;
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["userId"] = id;

  const { data, isLoading } = useGetBlogsQuery({ ...query });
  const [deleteBlog] = useDeleteBlogMutation();

  const blogs = data?.blogs;
  const meta = data?.meta;
  console.log(blogs);

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteBlog(id).unwrap();
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
      title: "Image",
      dataIndex: "",
      render: function (data: any) {
        return (
          <Image
            className="rounded-md"
            src={data?.blogImage}
            alt="blog_image"
            width={100}
            height={80}
          />
        );
      },
    },
    {
      title: "User",
      dataIndex: "",
      render: function (data: any) {
        return <p>{data?.user?.name}</p>;
      },
    },

    {
      title: "Blog Title",
      dataIndex: "title",
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
          <div className="flex gap-1">
            <Link href={`/dashboard/${role}/blog/edit/${data?.id}`}>
              <Button type="primary">
                <EditOutlined />
              </Button>
            </Link>
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
      <ActionBar title="All House Owners">
        <h2 className="ml-3">
          Create Blog{" "}
          <span>
            <ArrowRightOutlined />
          </span>
        </h2>
        <Link className="mr-3" href={`/dashboard/${role}/blog/create`}>
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={blogs}
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

export default BlogPage;
