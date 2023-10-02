import LoginPage from "@/components/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University Management/Login",
  description: "Generated by University Management",
};

const Login = () => {
  return (
    <>
      <LoginPage></LoginPage>
    </>
  );
};

export default Login;
