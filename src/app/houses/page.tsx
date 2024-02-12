"use client";

import FooterComponent from "@/components/ui/FooterComponent";
import { useGetHousesQuery } from "@/redux/api/houseApi";
import { useDebounced } from "@/redux/hooks";
import { Button, Col, Input, Pagination, Row, Select } from "antd";
import { useState } from "react";
import Loading from "../loading";
import ProductCart from "@/components/ui/ProductCart";
import ProductCartLoading from "@/components/ui/ProductCartLoading";
import { useDispatch, useSelector } from "react-redux";
import {
  bedrooms,
  gas,
  interior,
  propertyType,
  searchTerm,
  status,
} from "@/redux/slice/searchAndFilterSlice";

const Houses = () => {
  const query: Record<string, any> = {};
  const [current, setCurrent] = useState(3);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const loadingNumber = [1, 2, 3, 4, 5, 6, 7, 8];
  const dispatch = useDispatch();
  const searchAndFilter = useSelector((state: any) => state?.searchAndFilter);

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  if (searchAndFilter?.propertyType !== "") {
    query["propertyType"] = searchAndFilter?.propertyType;
  }
  if (searchAndFilter?.interior !== "") {
    query["interior"] = searchAndFilter?.interior;
  }
  if (searchAndFilter?.gas !== "") {
    query["gas"] = searchAndFilter?.gas;
  }
  if (searchAndFilter?.bedrooms !== "") {
    query["bedrooms"] = searchAndFilter?.bedrooms;
  }
  if (searchAndFilter?.status !== "") {
    query["status"] = searchAndFilter?.status;
  }

  const debouncedTerm = useDebounced({
    searchQuery: searchAndFilter?.searchTerm,
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
    dispatch(searchTerm(""));
    dispatch(propertyType(""));
    dispatch(interior(""));
    dispatch(gas(""));
    dispatch(bedrooms(""));
    dispatch(status(""));
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
        <div className="m-4">
          <div className=" md:px-40">
            <Input
              name="searchTerm"
              size="large"
              defaultValue={searchAndFilter?.searchTerm}
              placeholder="Search"
              onChange={(e) => {
                dispatch(searchTerm(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="bg-gray-100 p-4 mx-2 rounded-lg flex flex-wrap justify-center gap-2 mt-24">
          <div>
            <Select
              size="middle"
              className="w-32"
              defaultValue={
                searchAndFilter?.propertyType !== ""
                  ? searchAndFilter?.propertyType
                  : "Category"
              }
              options={categoryOptions}
              placeholder="Category"
              onChange={(e) => {
                dispatch(propertyType(e));
              }}
            />
          </div>
          <div>
            <Select
              size="middle"
              className="w-32"
              options={interiorOptions}
              defaultValue={
                searchAndFilter?.interior !== ""
                  ? searchAndFilter?.interior
                  : "Interior"
              }
              placeholder="Interior"
              onChange={(e) => {
                dispatch(interior(e));
              }}
            />
          </div>
          <div>
            <Select
              className="w-28"
              size="middle"
              options={statusOptions}
              defaultValue={
                searchAndFilter?.status !== ""
                  ? searchAndFilter?.status
                  : "Status"
              }
              placeholder="Status"
              onChange={(e) => {
                dispatch(status(e));
              }}
            />
          </div>
          <div>
            <Select
              size="middle"
              options={bedroomsOptions}
              placeholder="Bedrooms"
              defaultValue={
                searchAndFilter?.bedrooms !== undefined
                  ? searchAndFilter?.bedrooms
                  : "Bedrooms"
              }
              onChange={(e) => {
                dispatch(bedrooms(e));
              }}
            />
          </div>
          <div>
            <Select
              size="middle"
              options={gasOptions}
              placeholder="GAS"
              defaultValue={
                searchAndFilter?.gas !== "" ? searchAndFilter?.gas : "GAS"
              }
              onChange={(e) => {
                dispatch(gas(e));
              }}
            />
          </div>
          <div>
            <Button
              className="text-white w-full bg-red-500"
              size="middle"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className=" mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {isLoading &&
            loadingNumber?.map((x, index) => (
              <ProductCartLoading key={index} />
            ))}
        </div>
        {houses?.length ? (
          <div className=" mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
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
