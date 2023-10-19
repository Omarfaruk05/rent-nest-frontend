"use client";

import { useGetBlogsQuery } from "@/redux/api/blogApi";
import FooterComponent from "./FooterComponent";
import Loading from "@/app/loading";

const Blog = () => {
  const { data, isLoading } = useGetBlogsQuery({});

  const blogs = data?.blogs;
  const meta = data?.meta;

  return (
    <div>
      <div className="bg-gradient-to-r from-teal-400 to-violet-600 h-96">
        <div className="pt-32 flex justify-center items-center ">
          <div className="flex  justify-center  items-center backdrop-blur-lg bg-white/50 p-4 mx-4  w-[600px] h-40 rounded-md  ">
            <h1 className="text-indigo-500 animate-bounce">Our Blogs</h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto  mt-12">
        {blogs ? (
          blogs.map((blog, index) => (
            <div key={index} className="mx-4 bg-gray-200 p-4 mb-4 rounded-md">
              <h2 className="text-indigo-500">{blog?.title}</h2>
              <p className="mt-8 text-gray-700 ">{blog?.blog}</p>
            </div>
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default Blog;
