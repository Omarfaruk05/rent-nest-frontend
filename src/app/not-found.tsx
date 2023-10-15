import { Button, Result, Row } from "antd";
import Link from "next/link";

const NotFound = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href={"/"}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </Row>
  );
};

export default NotFound;
