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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type navBtnProps = {
  showDrawer: () => void;
  flexDir?: string;
};

const NavbarBtn = ({ flexDir, showDrawer }: navBtnProps) => {
  const [userRole, setUserRole] = useState(undefined);
  const [logout, setLogout] = useState(false);

  const router = useRouter();
  const logOut = () => {
    removeUserInfo(AUTH_KEY);
    setLogout(!logout);
    router.push("/");
  };

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, [logout, userRole]);

  console.log(logout, userRole);

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
      {userRole && (
        <Link
          className="text-center  border-solid border-[1px] rounded-md border-blue-500 m-1 "
          href={"/dashboard/house_renter/profile"}
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
      )}
      {!userRole ? (
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
        <Link href={"/"}>
          <Button
            onClick={logOut}
            size="middle"
            className="text-white w-full text-center  border-solid border-[1px] rounded-md m-1 "
            type="primary"
            danger
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavbarBtn;
