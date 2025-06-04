"use client";

import { Button, Image } from "antd";
import React, { useState } from "react";
import { IBlog } from "./Blogs";
import SlideUp from "../motions/SlideUp";

const Blog = ({ blog }: { blog: IBlog }) => {
  const [minimize, setMinimize] = useState(true);
  return (
    <SlideUp>
      <div className="flex gap-2 bg-gray-50 mb-4 rounded-md p-3">
        <div>
          <Image
            width={300}
            height={150}
            src={blog?.blogImage}
            alt="blog_image"
          />
        </div>
        <div>
          <SlideUp>
            {" "}
            <h2 className="text-teal-700">{blog?.title}</h2>
          </SlideUp>
          {minimize ? (
            <SlideUp>
              {" "}
              <p className="mt-2 text-gray-700 ">
                <span>{blog?.blog.split(".")[0]}....</span>
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
            </SlideUp>
          ) : (
            <p className="mt-2 text-gray-700 h-full ">
              {blog?.blog}
              <Button
                onClick={() => setMinimize(true)}
                size="small"
                type="link"
              >
                Show Less
              </Button>
            </p>
          )}
        </div>
      </div>
    </SlideUp>
  );
};

export default Blog;
