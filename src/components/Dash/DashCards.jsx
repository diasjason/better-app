import React from "react";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import { useSelector } from "react-redux";
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
          <h2>{irr}%</h2>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={5}>
        <Card hoverable className="dash-card" value="5">
          <Title className="news-title" level={4}>
            NPV
          </Title>
          <h2>{npv}%</h2>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={5}>
        <Card hoverable className="dash-card" value="5">
          <Title className="news-title" level={4}>
            CapRate
          </Title>
          <h2>{caprate}%</h2>
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={5}>
        <Card hoverable className="dash-card" value="5">
          <Title className="news-title" level={4}>
            Cash on Cash
          </Title>
          <h2>{cashoncash}%</h2>
        </Card>
      </Col>
    </Row>
  );
};

export default DashCards;
