"use client";

import { Drawer } from "antd";
import NavbarBtn from "./NavbarBtn";

type drawerProps = {
  open: boolean;
  onClose: () => void;
};

const NavDrawer = ({ open, onClose }: drawerProps) => {
  return (
    <div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        className="bg-slate-900 bg-opacity-75"
      >
        <NavbarBtn flexDir="flex-col" />
      </Drawer>
    </div>
  );
};

export default NavDrawer;
