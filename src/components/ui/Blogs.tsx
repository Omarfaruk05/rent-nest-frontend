"use client";

import { useGetBlogsQuery } from "@/redux/api/blogApi";
import Hero from "./Hero";
import FooterComponent from "./FooterComponent";
import Loading from "@/app/loading";
import Blog from "./Blog";

export interface IBlog {
  title: string;
  blogImage: string;
  blog: string;
  userId: string;
  user: Object;
}

const Blogs: React.FC = () => {
  const { data, isLoading } = useGetBlogsQuery({});

  const blogs: IBlog[] | undefined = data?.blogs;

  return (
    <div>
      <Hero>
        <p className="text-5xl font-semibold text-teal-800">Blogs</p>
      </Hero>
      <div className="max-w-7xl mx-auto mt-12 p-4 lg:grid grid-cols-2 gap-4">
        {blogs ? (
          blogs.map((blog: IBlog, index) => <Blog blog={blog} key={index} />)
        ) : (
          <Loading />
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default Blogs;
