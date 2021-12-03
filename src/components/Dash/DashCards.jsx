import React from "react";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import { useSelector } from "react-redux";
import BlinkingComponent from "../BlinkingComponent";
const { Title } = Typography;

const DashCards = () => {
  const { irr, npv, caprate, cashoncash } = useSelector(
    (state) => state.dashboard
  );
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={12} lg={5}>
        <Card hoverable className="dash-card" value="5">
          <Title className="news-title" level={4}>
            IRR
          </Title>
          <BlinkingComponent text={`${irr + " %"}`}></BlinkingComponent>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={5}>
        <Card hoverable className="dash-card" value="5">
          <Title className="news-title" level={4}>
            NPV
          </Title>
          <BlinkingComponent text={`${npv + " %"}`}></BlinkingComponent>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={5}>
        <Card hoverable className="dash-card" value="5">
          <Title className="news-title" level={4}>
            CapRate
          </Title>
          <BlinkingComponent text={`${caprate + " %"}`}></BlinkingComponent>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={5}>
        <Card hoverable className="dash-card" value="5">
          <Title className="news-title" level={4}>
            Cash on Cash
          </Title>
          <BlinkingComponent text={`${cashoncash + " %"}`}></BlinkingComponent>
        </Card>
      </Col>
    </Row>
  );
};

export default DashCards;
