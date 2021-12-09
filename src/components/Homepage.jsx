import { useState } from "react";
import React from "react";
import { Col, Badge, Avatar, Input } from "antd";
import DashCards from "./Dash/DashCards";
import AddressDetails from "./Dash/AddressDetails";
export const Homepage = () => {
  const [text, setText] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setText(event.target.value); //"519885940_19999" //100660192_215949340 //511389400_16742
    }
  };

  return (
    <>
      <Col className="search-dash">
        <Input placeholder="search" onKeyDown={handleKeyDown}></Input>
      </Col>
      {text !== "" ? <DashCards></DashCards> : ""}

      {text !== "" ? <AddressDetails dmpId={text}></AddressDetails> : ""}
    </>
  );
};

export default Homepage;
