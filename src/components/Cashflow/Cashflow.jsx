import { Button, notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { reset, runAnalysis } from "../../app/property";
import {
  CaretRightOutlined,
  MailFilled,
  SyncOutlined,
} from "@ant-design/icons";
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
  const handleSaveClick = () => {
    notification.open({
      message: "Mail Sent!",
      description: "CashFlow Ananlysis Has been mailed to you",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
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
      <Button type="primary" icon={<MailFilled />} onClick={handleSaveClick}>
        Save
      </Button>
    </div>
  );
};

export default Cashflow;
