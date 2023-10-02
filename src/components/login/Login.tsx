"use client";

import { Col, Row, Button } from "antd";
import loginImg from "../../assects/login-image.png";
import Image from "next/image";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FromValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userlogin] = useUserLoginMutation();

  const router = useRouter();

  const onsubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
      const res = await userlogin({ ...data }).unwrap();
      console.log(res);

      if (res?.accessToken) {
        router.push("/profile");
      }

      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImg} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onsubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
