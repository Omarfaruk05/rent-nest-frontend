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
import { DeleteOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import UMTable from "@/components/ui/UMTable";
import ActionBar from "@/components/ui/ActionBar";
import {
  useDeleteHouseVisitMutation,
  useGetHousevisitsQuery,
} from "@/redux/api/houseVisitApi";

const HouseVisitPage = () => {
  const { id, role } = getUserInfo() as any;

  const { data: houseVisit, isLoading } = useGetHousevisitsQuery({});
  const [deleteHouseVisit] = useDeleteHouseVisitMutation();

  console.log(houseVisit);
  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteHouseVisit(id);
      if (res) {
        message.success("House Visit Deleted successfully");
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
        return <p>{data.house.name}</p>;
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
      title: "Schedule Date",
      dataIndex: "visitDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
    },
    {
      title: "Schedule Time",
      dataIndex: "",
      render: function (data: any) {
        if (data.visitSlot === "MORNING") {
          return <p>10:00AM - 12:00PM</p>;
        } else if (data.visitSlot === "NOON") {
          return <p>1:00PM - 3:00PM</p>;
        } else if (data.visitSlot === "EVENING") {
          return <p>4:00PM - 6:00PM</p>;
        }
      },
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
          <Button onClick={() => deleteHandler(data?.id)} type="primary" danger>
            <DeleteOutlined />
          </Button>
        );
      },
    },
  ];

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="m-2">
      <ActionBar title="Clients want to visit this housees."></ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={houseVisit}
        showSizeChanger={true}
        showPagination={true}
      />
    </div>
  );
};

export default HouseVisitPage;
