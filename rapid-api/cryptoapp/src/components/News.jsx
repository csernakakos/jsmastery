import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Text, Title, } = Typography;
const { Option } = Select;
const demoImage = "https://www.google.com";

export default function News({ simplified }) {
    const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12});
    const { data } = useGetCryptosQuery(100);

    if (!cryptoNews?.value) return "Loading...";

    console.log(cryptoNews, "<<<<<");

    return (
        <Row gutters={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select showSearch className="select-news" placeholder="Select a crypto" optionFilterProp="children" onChange={(value) => setNewsCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin, index) => (
                            <Option value={coin.name} key={index}>{coin.name}</Option>
                        ))}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col cs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>
                                    {news.name}
                                </Title>
                                <img style={{ maxWidth: "200px", maxHeight: "200px"}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 70)}...` : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                    <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}