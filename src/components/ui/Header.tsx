"use client";

import { Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import NavbarBtn from "./NavbarBtn";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=" bg-teal-900/80 text-white sticky backdrop-blur-sm top-0 z-30">
      <div className="mx-2 sm:mx-4 md:mx-12 lg:mx-20 flex justify-between items-center py-2">
        <Link href={"/"}>
          <Button className="text-white hover:text-blue-500" type="link">
            <h1 className="-mt-3"> Rent Nest</h1>
          </Button>
        </Link>

        <div className=" hidden lg:block">
          <NavbarBtn showDrawer={function () {}} />
        </div>
        <Button
          size="middle"
          className="text-white block lg:hidden hover:text-blue-500"
          type="link"
          icon={<MenuUnfoldOutlined />}
          onClick={showDrawer}
        ></Button>
      </div>
      <NavDrawer open={open} onClose={onClose} showDrawer={showDrawer} />
    </div>
  );
};

export default Header;
