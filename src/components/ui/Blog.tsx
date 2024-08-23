"use client";

import { Button, Image } from "antd";
import React, { useState } from "react";
import { IBlog } from "./Blogs";
import RevelMotion from "../motions/RevelMotion";

const Blog = ({ blog }: { blog: IBlog }) => {
  const [minimize, setMinimize] = useState(true);
  return (
    <RevelMotion>
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
          <RevelMotion>
            {" "}
            <h2 className="text-teal-700">{blog?.title}</h2>
          </RevelMotion>
          {minimize ? (
            <RevelMotion>
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
            </RevelMotion>
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
    </RevelMotion>
  );
};

export default Blog;
