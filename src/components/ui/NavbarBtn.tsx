"use client";
import {
  HomeOutlined,
  ReadOutlined,
  OrderedListOutlined,
  HeartOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const NavbarBtn = ({ flexDir }: { flexDir?: string }) => {
  return (
    <div className={`flex ${flexDir}`}>
      <Button
        className="text-white hover:text-blue-500 border-solid border-1 border-blue-500 m-1"
        type="link"
        icon={<HomeOutlined />}
      >
        Houses
      </Button>
      <Button
        className="text-white hover:text-blue-500 border-solid border-1 border-blue-500 m-1"
        type="link"
        icon={<ReadOutlined />}
      >
        Blog
      </Button>
      <Button
        className="text-white  hover:text-blue-500 border-solid border-1 border-blue-500 m-1"
        type="link"
        icon={<OrderedListOutlined />}
      >
        Category
      </Button>
      <Button
        className="text-white hover:text-blue-500 border-solid border-1 border-blue-500 m-1"
        type="link"
        icon={<HeartOutlined />}
      >
        Saved
      </Button>
      <Button
        className="text-white hover:text-blue-500 border-solid border-1 border-blue-500 m-1"
        type="link"
        icon={<HeartOutlined />}
      >
        Dashboard
      </Button>
      <Button
        size="middle"
        className="text-white m-1"
        type="primary"
        icon={<LoginOutlined />}
      >
        Login
      </Button>
    </div>
  );
};

export default NavbarBtn;
