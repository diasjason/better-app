import React from "react";
import { Card, Typography, Row } from "antd";
const { Title, TimelineItem } = Typography;

const TransactionHistory = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default TransactionHistory;
