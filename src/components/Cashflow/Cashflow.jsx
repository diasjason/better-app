import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { reset, runAnalysis } from "../../app/dashboard";
import { CaretRightOutlined, SyncOutlined } from "@ant-design/icons";

const Cashflow = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        type="primary"
        icon={<CaretRightOutlined />}
        onClick={() => dispatch(runAnalysis())}
      >
        Run
      </Button>
      <Button
        type="primary"
        shape="circle"
        icon={<SyncOutlined />}
        onClick={() => dispatch(reset())}
      >
        Reset
      </Button>
    </div>
  );
};

export default Cashflow;
