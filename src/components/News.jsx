import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCRENewsQuery } from "../services/cRENews";

const { Text, Title } = Typography;
const { Option } = Select;

export const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Real Estate");
  const { data: creNews } = useGetCRENewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!creNews?.value) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {creNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl}
                  alt="news"
                ></img>
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
