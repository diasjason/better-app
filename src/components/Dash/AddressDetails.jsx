import React from "react";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import { useGetAddressQuery } from "../../services/addressApi";
import { useSelector } from "react-redux";
import TimelineItem from "antd/lib/timeline/TimelineItem";
import Cashflow from "../Cashflow/Cashflow";
import BlinkingComponent from "../BlinkingComponent";
const { Title } = Typography;

const AddressDetails = (prop) => {
  const {
    data: addressData,
    isLoading,
    isError,
    isFetching,
  } = useGetAddressQuery({
    searchString: prop.dmpId, //"519885940_19999"
  });

  const { value } = useSelector((state) => state.property);
  if (isLoading) return "Loading...";
  console.log(addressData);
  return (
    <>
      <Row>
        <Title>Address</Title>
      </Row>
      <Row>
        <Col span={2}>
          <Statistic title="City" value={addressData.address.city}></Statistic>
        </Col>
        <Col span={2}>
          <Statistic
            title="Country"
            value={addressData.address.country}
          ></Statistic>
        </Col>
        <Col span={2}>
          <Statistic
            title="State"
            value={addressData.address.state}
          ></Statistic>
        </Col>
        <Col span={4}>
          <Statistic
            title="Street"
            value={addressData.address.street}
          ></Statistic>
        </Col>
        <Col span={2}>
          <Statistic title="Zip" value={addressData.address.zip}></Statistic>
        </Col>
      </Row>
      <Row>
        <Title>Details</Title>
      </Row>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Title className="news-title" level={4}>
              Investment Overview
            </Title>
            <p>
              <b>APN</b>
              {"  "}
              {addressData.details.apn}{" "}
            </p>
            <p>
              <b>Value</b>$<BlinkingComponent text={value}></BlinkingComponent>
            </p>
            <p>
              <b>Parcel</b>
              {"  "}
              {addressData.details.parcel.value}{" "}
              {addressData.details.parcel.type}
            </p>
          </Card>
        </Col>
        <Card xs={24} sm={12} lg={6}>
          <Title>Transaction History</Title>
          <TimelineItem>
            <p>
              <b>On Market</b>
            </p>
            <p>August 29,2021</p>
          </TimelineItem>
          <TimelineItem color="green">
            <p>
              <b>Sold to Dave's Development</b>
            </p>
            <p>Sept 29,2021 - $13,000,000</p>
          </TimelineItem>
          <TimelineItem color="green">
            <p>
              <b>Sold</b>
            </p>
            <p>Oct 29,2021 - $9,000,000</p>
          </TimelineItem>
        </Card>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Title>News</Title>
          </Card>
        </Col>
        <Col>
          <Cashflow></Cashflow>
        </Col>
      </Row>
    </>
  );
};

export default AddressDetails;
