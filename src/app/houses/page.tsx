"use client";

import FooterComponent from "@/components/ui/FooterComponent";
import { useGetHousesQuery } from "@/redux/api/houseApi";
import { useDebounced } from "@/redux/hooks";
import { Button, Col, Input, Pagination, Row, Select } from "antd";
import { useState } from "react";
import Loading from "../loading";
import ProductCart from "@/components/ui/ProductCart";
import ProductCartLoading from "@/components/ui/ProductCartLoading";

const Houses = () => {
  const query: Record<string, any> = {};
  const [current, setCurrent] = useState(3);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [interior, setInterior] = useState<string>("");
  const [gas, setGas] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const loadingNumber = [1, 2, 3, 4, 5, 6, 7, 8];

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  if (propertyType !== "") {
    query["propertyType"] = propertyType;
  }
  if (interior !== "") {
    query["interior"] = interior;
  }
  if (gas !== "") {
    query["gas"] = gas;
  }
  if (status !== "") {
    query["status"] = status;
  }

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetHousesQuery({ ...query });

  const houses = data?.houses;
  const meta = data?.meta;

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setInterior("");
    setGas("");
    setStatus("");
    setPropertyType("");
  };

  const categoryOptions = [
    {
      label: "Furnished",
      value: "Furnished",
    },
    {
      label: "Residential",
      value: "Residential",
    },
    {
      label: "Luxury",
      value: "Luxury",
    },
  ];

  const interiorOptions = [
    {
      label: "Furnished",
      value: "Furnished",
    },
    {
      label: "Un Furnished",
      value: "Un_Furnished",
    },
  ];
  const statusOptions = [
    {
      label: "AVAILABLE",
      value: "AVAILABLE",
    },
    {
      label: "BOOKED",
      value: "BOOKED",
    },
  ];

  const gasOptions = [
    {
      label: "LPG",
      value: "LPG",
    },
    {
      label: "Govt",
      value: "Govt",
    },
  ];
  const bedroomsOptions = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-[70vh]">
        <Row className="m-4" gutter={{ xs: 4, sm: 8, md: 16, lg: 16 }}>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Input
              name="searchTerm"
              size="large"
              placeholder="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Select
              style={{ width: "100%" }}
              size="large"
              options={categoryOptions}
              placeholder="Category"
              onChange={(e) => {
                setPropertyType(e);
              }}
            />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Select
              style={{ width: "100%" }}
              size="large"
              options={interiorOptions}
              placeholder="Interior"
              onChange={(e) => {
                setInterior(e);
              }}
            />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Select
              style={{ width: "100%" }}
              size="large"
              options={gasOptions}
              placeholder="GAS"
              onChange={(e) => {
                setGas(e);
              }}
            />
          </Col>
          <Col
            className="gutter-row mx-auto"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <div className="flex justify-center items-center gap-2">
              <Select
                style={{ width: "100%" }}
                size="large"
                options={statusOptions}
                placeholder="Status"
                onChange={(e) => {
                  setStatus(e);
                }}
              />
              <Button
                className="text-white bg-red-500"
                size="large"
                htmlType="submit"
                onClick={resetFilters}
              >
                Rset Filter
              </Button>
            </div>
          </Col>
        </Row>
        <div className=" mx-2 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {isLoading &&
            loadingNumber?.map((x, index) => (
              <ProductCartLoading key={index} />
            ))}
        </div>
        {houses?.length ? (
          <div className=" mx-2 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {houses?.map((house: any, index: any) => (
              <ProductCart house={house} key={index} />
            ))}
          </div>
        ) : (
          <h1 className=" text-center mt-36 text-slate-500">No Data found</h1>
        )}
      </div>
      <Pagination
        className="my-6 text-center"
        current={current}
        showSizeChanger
        onChange={onPaginationChange}
        defaultCurrent={1}
        total={meta?.total}
      />
      <FooterComponent />
    </div>
  );
};

export default Houses;
