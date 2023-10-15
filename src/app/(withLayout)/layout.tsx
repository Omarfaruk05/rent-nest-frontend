"use client";

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";
import Header from "@/components/ui/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout hasSider>
        <Sidebar />
        <Layout>
          <Contents>{children}</Contents>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
