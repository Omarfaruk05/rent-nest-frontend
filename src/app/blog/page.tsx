import Blogs from "@/components/ui/Blogs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rent Nest/Blogs",
  description: "Rent Nest Loin page.",
};

const BlogPage = () => {
  return (
    <div>
      <Blogs></Blogs>
    </div>
  );
};

export default BlogPage;
