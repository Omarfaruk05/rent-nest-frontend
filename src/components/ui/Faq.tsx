/* eslint-disable react/no-unescaped-entities */
"use client";

import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, Image, theme } from "antd";
import { useGetFAQQuery } from "@/redux/api/faqApi";
import Loading from "@/app/loading";
import FaqImg from "../../assects/faq.jpg";

const FaqPage = () => {
  const { data, isLoading } = useGetFAQQuery({ page: 1, limit: 10 });

  const faqs: any = data?.faq;
  const meta = data?.meta;

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) =>
    faqs?.map((faq: any) => {
      return {
        key: faq?.id,
        label: <h3 className="text-slate-800">{faq?.question}</h3>,
        children: (
          <p className="text-slate-500">
            <span className="font-semibold">Ans:</span>
            {faq?.answer}
          </p>
        ),
        style: panelStyle,
      };
    });

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-12 max-w-7xl mx-auto">
      <div className="mx-4">
        <h1 className=" text-center text-slate-500">FAQ'S</h1>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>
        <div className="flex gap-4 my-24">
          <Collapse
            className="mx-auto md:w-1/2 mt-4"
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle)}
          />
          <div className="md:w-1/2 hidden md:block ">
            <Image className="w-full h-full" src={FaqImg.src} alt="faq_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
