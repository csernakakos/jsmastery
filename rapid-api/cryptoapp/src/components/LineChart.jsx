
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;
 

export default function LineChart({ coinHistory, currentPrice, coinName }) {

    const coinPrice = [];
    const coinTimestamp = [];
    
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinPrice.push(new Date(coinHistory.data.history[i].timestamp));
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: "Price in USD",
                data: coinPrice,
                fill: false,
                backgroundColor: "#0071bd",
                borderColor: "#0071bd",
            }
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    }
                }
            ],
            xAxes: [],
        }
    }

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart</Title>
                <Col>
                    <Title></Title>
                    <Title></Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}