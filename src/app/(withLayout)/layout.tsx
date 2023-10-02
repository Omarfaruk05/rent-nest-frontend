"use client";

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <Loading></Loading>;
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <Contents>{children}</Contents>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
