"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "@/redux/api/blogApi";
import { blogSchema } from "@/schemas/blog";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const EditBlogPage = ({ params }: { params: any }) => {
  const id: string = params?.id;

  const [updateBlog] = useUpdateBlogMutation();
  const { data, isLoading } = useGetSingleBlogQuery(id);

  console.log(data);
  const createBlog = async (data: any) => {
    try {
      const blogData = {
        id: id,
        body: {
          title: data?.title,
          blogImage: data?.blogImage,
          blog: data?.blog,
        },
      };
      console.log();
      message.loading("Please wite");
      const res = await updateBlog(blogData).unwrap();
      if (res?.id) {
        message.success("Blog updated successfully.");
      }
    } catch (error: any) {
      message.error(error.message);
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto  p-4 md:px-20 lg:px-40">
        <h2 className="text-slate-700 text-center mt-20">Update Blog</h2>
        <Form
          submitHandler={createBlog}
          defaultValues={data}
          resolver={yupResolver(blogSchema)}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={24}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="title"
                size="large"
                label="Title"
                placeholder="Title"
              />
            </Col>
            <Col
              className="gutter-row"
              span={24}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="blogImage"
                size="large"
                label="Blog Image"
                placeholder="Blog Image Link"
              />
            </Col>
            <Col
              className="gutter-row"
              span={24}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormTextArea name="blog" label="Blog" placeholder="Blog" />
            </Col>
          </Row>
          <div className="text-center">
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className="px-12"
            >
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditBlogPage;
