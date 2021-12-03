import React from "react";
import { Timeline, Button } from "antd";
// import Canvas from "antd";

export const Property = () => {
  return (
    <div>
      {/* <Timeline>
        <Timeline.Item label="2015-09-01" color="green">
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item color="green">
          Create a services site 2015-09-01
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>Due Duligence</p>
          <p>Industrial</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
      </Timeline> */}
      <Timeline mode="left">
        <Timeline.Item color="green" label="2015-09-01">
          <p>Underwriting Atlast Complex</p>
          <p>Industrial</p>
        </Timeline.Item>
        <Timeline.Item color="green" label="2015-09-01 09:12:11">
          <p>Due Duligence</p>
          <p>Industrial</p>
        </Timeline.Item>
        <Timeline.Item color="red">Due Diligence</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">
          Network problems being solved
        </Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Next process</Timeline.Item>
      </Timeline>

      <Timeline mode="center" pending="Recording..." />
    </div>
  );
};

export default Property;
