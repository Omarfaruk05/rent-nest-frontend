"use client";

import { useState } from "react";
import { Menu, Layout } from "antd";
import sidebarItems from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      className="bg-slate-200"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: "0",
        top: "50px",
        bottom: "0",
        paddingRight: "10px",
      }}
    >
      <div
        style={{
          color: "black",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      ></div>
      <Menu
        className="bg-slate-200"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
