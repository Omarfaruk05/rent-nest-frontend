import LoginPage from "@/components/login/Login";
import FooterComponent from "@/components/ui/FooterComponent";
import { getUserInfo } from "@/services/auth.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent Nest/Login",
  description: "Rent Nest Loin page.",
};

const Login = () => {
  return (
    <div>
      <LoginPage></LoginPage>
      <FooterComponent />
    </div>
  );
};

export default Login;
