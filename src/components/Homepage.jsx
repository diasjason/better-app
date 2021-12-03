import { useState } from "react";
import React from "react";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import DashCards from "./Dash/DashCards";
import AddressDetails from "./Dash/AddressDetails";
export const Homepage = () => {
  const [hilight, setHighlight] = useState({ highlight: false });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    }
  };
  return (
    <>
      <Col className="search-dash">
        <Input placeholder="search" onKeyDown={handleKeyDown}></Input>
      </Col>
      <DashCards></DashCards>
      <AddressDetails></AddressDetails>
    </>
  );
};

export default Homepage;
