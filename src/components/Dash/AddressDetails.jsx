import React from "react";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import { useGetAddressQuery } from "../../services/addressApi";
const { Title } = Typography;

const AddressDetails = () => {
  const { data: addressData, isLoading } = useGetAddressQuery({
    searchString: "519885940_19999",
  });
  if (!addressData?.id) return "Loading...";
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
      <Row>
        <Col span={2}>
          <Statistic title="APN" value={addressData.details.apn}></Statistic>
        </Col>
      </Row>
    </>
  );
};

export default AddressDetails;
