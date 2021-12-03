import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { reset, runAnalysis } from "../../app/property";
import { CaretRightOutlined, SyncOutlined } from "@ant-design/icons";
import { flash, unFlash } from "../../app/highlight";

const Cashflow = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(runAnalysis());
    dispatch(flash());
    setTimeout(() => {
      dispatch(unFlash());
    }, 1000);
  };
  return (
    <div className="cashflow">
      <Button
        className="runAnalysisButton"
        type="primary"
        icon={<CaretRightOutlined />}
        onClick={handleClick}
      >
        Run Cashflow Analysis
      </Button>
      <Button
        type="dash"
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
