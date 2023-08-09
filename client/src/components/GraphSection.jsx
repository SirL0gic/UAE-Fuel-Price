
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        date: 'March 2023',
        super98: '3.09',
        special95: '2.97',
        ePlus91: '2.90',
        diesel: '3.14',
      },
      {
        date: 'April 2023',
        super98: '3.01',
        special95: '2.90',
        ePlus91: '2.82',
        diesel: '3.03',
      },
      {
        date: 'May 2023',
        super98: '3.16',
        special95: '3.05',
        ePlus91: '2.97',
        diesel: '2.91',
      },
      {
        date: 'June 2023',
        super98: '2.95',
        special95: '2.84',
        ePlus91: '2.76',
        diesel: '2.68',
      },
      {
        date: 'July 2023',
        super98: '3.00',
        special95: '2.89',
        ePlus91: '2.81',
        diesel: '2.76',
      },
      {
        date: 'August 2023',
        super98: '3.14',
        special95: '3.02',
        ePlus91: '2.95',
        diesel: '2.95',
      },
  ];

export default function Graphh() {

    const isMobile = window.innerWidth <= 767; // Define mobile breakpoint
  return (
  <Container fluid className="graph-container">
    <Row>
        <Col lg={12}>
        <LineChart
      width={isMobile ? 400 : 800}
      height={isMobile ? 400 : 800}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis  domain={[2, 'auto']} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="super98" stroke="#38B6FF" strokeWidth={3} />
      <Line type="monotone" dataKey="special95" stroke="#00BF63" strokeWidth={3}/>
      <Line type="monotone" dataKey="ePlus91" stroke="#FF3131" strokeWidth={3} />
      <Line type="monotone" dataKey="diesel" stroke="#FFBD59" strokeWidth={3} />
    </LineChart>
    </Col>
    </Row>

  </Container>
   

  );
}
