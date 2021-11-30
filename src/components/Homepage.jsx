import { useState } from "react";
import React from "react";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import { Link } from "react-router-dom";
import { useGetAddressQuery } from "../services/addressApi";
const { Title, Text } = Typography;

export const Homepage = () => {
  const [irrState, setIrrState] = useState(5);
  const { data: address } = useGetAddressQuery({
    searchString: "519885940_19999",
  });
  console.log(address);
  if (!address?.id) return "Loading...";
  return (
    <>
      <Col className="search-dash">
        <Input placeholder="search"></Input>
      </Col>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={5}>
          <Card hoverable className="dash-card" value="5">
            <Title className="news-title" level={4}>
              IRR
            </Title>
            <h2>{irrState}%</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={5}>
          <Card hoverable className="dash-card" value="5">
            <Title className="news-title" level={4}>
              NPV
            </Title>
            <h2>{irrState}%</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={5}>
          <Card hoverable className="dash-card" value="5">
            <Title className="news-title" level={4}>
              CapRate
            </Title>
            <h2>{irrState}%</h2>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={5}>
          <Card hoverable className="dash-card" value="5">
            <Title className="news-title" level={4}>
              Cash on Cash
            </Title>
            <h2>{irrState}%</h2>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
