import { Row, Spin } from "antd";

const Loading = () => {
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </Row>
    </div>
  );
};

export default Loading;
