import { useState } from "react";
import React from "react";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import DashCards from "./Dash/DashCards";
import AddressDetails from "./Dash/AddressDetails";
import Cashflow from "./Cashflow/Cashflow";

export const Homepage = () => {
  const [irrState, setIrrState] = useState(5);

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
      <Cashflow></Cashflow>
    </>
  );
};

export default Homepage;
