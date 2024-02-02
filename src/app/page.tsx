import About from "@/components/ui/About";
import CreateFeedback from "@/components/ui/CreateFeedback";
import FaqPage from "@/components/ui/Faq";
import Feedback from "@/components/ui/Feedback";
import FooterComponent from "@/components/ui/FooterComponent";
import Hero from "@/components/ui/Hero";
import LatestProperty from "@/components/ui/LatestProperty";
import OurPartners from "@/components/ui/OurPartners";
import Overview from "@/components/ui/Overview";
import PropertyCategory from "@/components/ui/PropertyCategory";
import Servey from "@/components/ui/Servey";
import UpComingCategory from "@/components/ui/UpComingCategory";
import { Button, Col, Input, Row, Select } from "antd";

const HomePage = () => {
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
              // onChange={(e) => {
              //   setPropertyType(e);
              // }}
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
              // onChange={(e) => {
              //   setSearchTerm(e.target.value);
              // }}
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
              // onChange={(e) => {
              //   setInterior(e);
              // }}
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
              // onChange={(e) => {
              //   setGas(e);
              // }}
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
              // onChange={(e) => {
              //   setStatus(e);
              // }}
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
              // onChange={(e) => {
              //   setStatus(e);
              // }}
            />
          </Col>
          <Col
            className="gutter-row mx-auto"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <Button
              type="primary"
              className="text-white w-full border-none"
              size="large"
              htmlType="submit"
            >
              Find
            </Button>
          </Col>
        </Row>
      </Hero>
      <PropertyCategory />
      <About />
      <UpComingCategory />
      <LatestProperty />
      <Servey />
      <Feedback />
      <FaqPage />
      <OurPartners />
      <CreateFeedback />
      <FooterComponent />
    </div>
  );
};
export default HomePage;
