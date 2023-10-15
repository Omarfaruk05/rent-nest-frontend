"use client";
import { AUTH_KEY } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import {
  HomeOutlined,
  ReadOutlined,
  OrderedListOutlined,
  HeartOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Shippori_Antique } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

type navBtnProps = {
  showDrawer: () => void;
  flexDir?: string;
};

const NavbarBtn = ({ flexDir, showDrawer }: navBtnProps) => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(AUTH_KEY);
    router.push("/");
  };

  const { role } = getUserInfo() as any;

  return (
    <div className={`flex ${flexDir}`}>
      <Link
        className="text-center  border-solid border-[1px] rounded-md border-blue-500 m-1 "
        href={"/"}
      >
        <Button
          onClick={showDrawer}
          type="link"
          className="text-white hover:text-blue-500"
          icon={<HomeOutlined />}
        >
          Houses
        </Button>
      </Link>
      <Link
        className="text-center  border-solid border-[1px] rounded-md border-blue-500 m-1 "
        href={"/"}
      >
        <Button
          onClick={showDrawer}
          className="text-white hover:text-blue-500"
          type="link"
          icon={<ReadOutlined />}
        >
          Blog
        </Button>
      </Link>
      <Link
        className="text-center  border-solid border-[1px] rounded-md border-blue-500 m-1 "
        href={"/"}
      >
        <Button
          onClick={showDrawer}
          className="text-white hover:text-blue-500"
          type="link"
          icon={<OrderedListOutlined />}
        >
          Category
        </Button>
      </Link>
      <Link
        className="text-center  border-solid border-[1px] rounded-md border-blue-500 m-1 "
        href={"/"}
      >
        <Button
          onClick={showDrawer}
          className="text-white hover:text-blue-500"
          type="link"
          icon={<HeartOutlined />}
        >
          Saved
        </Button>
      </Link>
      <Link
        className="text-center  border-solid border-[1px] rounded-md border-blue-500 m-1 "
        href={"/dashboard/house_renter"}
      >
        <Button
          onClick={showDrawer}
          className="text-white hover:text-blue-500"
          type="link"
          icon={<HeartOutlined />}
        >
          Dashboard
        </Button>
      </Link>
      {role === undefined ? (
        <Link className="" href={"/login"}>
          <Button
            onClick={showDrawer}
            size="middle"
            className="text-white w-full text-center  border-solid border-[1px] rounded-md border-blue-500 m-1 "
            type="primary"
            icon={<LoginOutlined />}
          >
            Login
          </Button>
        </Link>
      ) : (
        <span onClick={logOut}>
          <Button
            onClick={showDrawer}
            size="middle"
            className="text-white w-full text-center  border-solid border-[1px] rounded-md m-1 "
            type="primary"
            danger
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </span>
      )}
    </div>
  );
};

export default NavbarBtn;
