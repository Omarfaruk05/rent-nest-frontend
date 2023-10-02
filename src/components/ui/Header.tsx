import {
  Avatar,
  Breadcrumb,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
  theme,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { AUTH_KEY } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const { Header: AntdHeader, Content, Footer } = Layout;

const Header = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(AUTH_KEY);
    router.push("/login");
  };
  const { role } = getUserInfo() as any;

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <AntdHeader
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
          gap: "15px",
        }}
      >
        <div>
          <h3>{role}</h3>
        </div>
        <Dropdown menu={{ items }}>
          <a>
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntdHeader>
  );
};

export default Header;
