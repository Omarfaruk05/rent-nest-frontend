"use client";

import { Button, Image } from "antd";
import React, { useState } from "react";
import { IBlog } from "./Blogs";

const Blog = ({ blog }: { blog: IBlog }) => {
  const [minimize, setMinimize] = useState(true);
  return (
    <div className="flex gap-2 bg-gray-50 mb-4 rounded-md">
      <div>
        <Image
          width={300}
          height={150}
          src={blog?.blogImage}
          alt="blog_image"
        />
      </div>
      <div>
        <h2 className="text-teal-700">{blog?.title}</h2>
        {minimize ? (
          <p className="mt-2 text-gray-700 ">
            <span>
              {blog?.blog.split(".")[0]}.{blog?.blog.split(".")[1]}....
            </span>
            <span>
              <Button
                onClick={() => setMinimize(false)}
                size="small"
                type="link"
              >
                See More
              </Button>
            </span>
          </p>
        ) : (
          <p className="mt-2 text-gray-700 h-full ">
            {blog?.blog}
            <Button onClick={() => setMinimize(true)} size="small" type="link">
              Show Less
            </Button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Blog;
