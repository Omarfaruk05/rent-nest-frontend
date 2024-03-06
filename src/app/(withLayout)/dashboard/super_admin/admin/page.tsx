"use client";

import { useDebounced } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Image, message } from "antd";
import UMTable from "@/components/ui/UMTable";
import ActionBar from "@/components/ui/ActionBar";
import Loading from "@/app/loading";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useMakeAdminMutation,
} from "@/redux/api/userApi";

const AdminUserPage = () => {
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
    query["role"] = "admin";
  }

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetUsersQuery({ ...query });
  const [deleteUser] = useDeleteUserMutation();
  const [makeAdmin] = useMakeAdminMutation();

  const users = data?.users;
  const meta = data?.meta;
  console.log(users);

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      console.log(data);
      const res = await deleteUser(id).unwrap();
      if (res?.id) {
        message.success("User Deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "",
      render: function (data: any) {
        return (
          <div>
            <p>{data?.name}</p>
            <Image
              className="rounded-md w-24 h-24"
              src={data?.profileImage}
              alt="houseImage"
            />
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact No.",
      dataIndex: "contactNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
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
      <ActionBar title="All Admins"></ActionBar>

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

export default AdminUserPage;
