"use client";

import { useGetBlogsQuery } from "@/redux/api/blogApi";
import FooterComponent from "./FooterComponent";
import Loading from "@/app/loading";
import Hero from "./Hero";

const Blog = () => {
  const { data, isLoading } = useGetBlogsQuery({});

  const blogs = data?.blogs;
  const meta = data?.meta;

  return (
    <div>
      <Hero>
        <p className="text-5xl font-semibold text-slate-800">Blog</p>
      </Hero>
      <div className="max-w-7xl mx-auto  mt-12">
        {blogs ? (
          blogs.map((blog, index) => (
            <div key={index} className="mx-4 bg-gray-50 p-4 mb-4 rounded-md">
              <h2 className="text-teal-700">{blog?.title}</h2>
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
