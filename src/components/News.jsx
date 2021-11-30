import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cRENews";

const { Text, Title } = Typography;
const { Option } = Select;

export const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  //   const { data } = useGetCryptosQuery(100);
  const { data: creNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  console.log(creNews);
  return <div>News</div>;
};

export default News;
