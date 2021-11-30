import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

export const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Title
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic title="IRR" value="5"></Statistic>
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="NPV" value="5"></Statistic>
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="E(x)" value="5"></Statistic>
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="CapRate" value="5"></Statistic>
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="CashonCash %" value="5"></Statistic>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
