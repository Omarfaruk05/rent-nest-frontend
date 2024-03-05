"use client";

import Hero from "@/components/ui/Hero";
import { SearchOutlined } from "@ant-design/icons";
import {
  bedrooms,
  gas,
  interior,
  propertyType,
  searchTerm,
  status,
} from "@/redux/slice/searchAndFilterSlice";
import { Button, Col, Input, Row, Select } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";

const HomepageHero = () => {
  const dispatch = useDispatch();

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
      <Hero>
        <Row className="m-4" gutter={{ xs: 4, sm: 8, md: 8, lg: 8 }}>
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
                dispatch(propertyType(e));
              }}
            />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <Input
              name="searchTerm"
              size="large"
              placeholder="Search"
              onChange={(e) => {
                dispatch(searchTerm(e.target.value));
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
                dispatch(interior(e));
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
                dispatch(gas(e));
              }}
            />
          </Col>
          <Col
            className="gutter-row mx-auto"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Select
              style={{ width: "100%" }}
              size="large"
              options={statusOptions}
              placeholder="Status"
              onChange={(e) => {
                dispatch(status(e));
              }}
            />
          </Col>
          <Col
            className="gutter-row mx-auto"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Select
              style={{ width: "100%" }}
              size="large"
              options={bedroomsOptions}
              placeholder="Bedrooms"
              onChange={(e) => {
                dispatch(bedrooms(e));
              }}
            />
          </Col>
          <Col
            className="gutter-row mx-auto"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Link href="/houses">
              <Button
                className="text-white w-full border-none bg-teal-800"
                size="large"
                htmlType="submit"
              >
                <SearchOutlined />
                Search
              </Button>
            </Link>
          </Col>
        </Row>
      </Hero>
    </div>
  );
};

export default HomepageHero;
