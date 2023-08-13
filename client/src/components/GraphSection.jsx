import { Container, Row, Col } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


let Graph = (props) => {
  const isMobile = window.innerWidth <= 767; // Define mobile breakpoint
  return (
    <Container fluid className="graph-container">
      <Row>
        <Col lg={12}>
        <h2 className="table-heading">Historical Fuel Prices in AED</h2>
          <LineChart
            width={isMobile ? 400 : 800}
            height={isMobile ? 400 : 800}
            data={props.dataGraph}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[2, "auto"]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="super98"
              stroke="#38B6FF"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="special95"
              stroke="#00BF63"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="ePlus91"
              stroke="#FF3131"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="diesel"
              stroke="#FFBD59"
              strokeWidth={3}
            />
          </LineChart>
        </Col>
      </Row>
    </Container>
  );
}

export default  Graph;