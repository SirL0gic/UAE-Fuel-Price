import { Container, Row, Col, Card } from "react-bootstrap";

let CardBox = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} alt="fuel-types" />
      <Card.Body>
        <Card.Title>{props.price}</Card.Title>
        <Card.Text>{props.type}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let PriceRow = (props) => {
  
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();

  return (
    <Container fluid className="price-card-container">
      <Row className="price-card-container-row">
        <h2 className="price-heading">
          Current Fuel Prices in AED for: {currentMonthName} {currentYear}
        </h2>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox
            image="https://i.imgur.com/fQnAmTV.png"
            price={props.dataPrice.super98 + " AED/L"}
            type="Super (98) has a high octane rating and is appropriate for high-performance gasoline automobiles. Super fuel is required for high-performance vehicles"
          />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox
            image="https://i.imgur.com/oMpEZpa.png"
            price={props.dataPrice.special95 + " AED/L"}
            type="Special (95) has a high octane rating and provides excellent performance in all gasoline-powered vehicles with medium compression engines. "
          />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox
            image="https://i.imgur.com/v8hiCr2.png"
            price={props.dataPrice.ePlus91 + " AED/L"}
            type="E-Plus 91 fuel is typically used in engines with low compression. Customers who operate fleets and commercial trucks are likely to utilize this fuel"
          />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox
            image="https://i.imgur.com/kTjld9p.png"
            price={props.dataPrice.diesel + " AED/L"}
            type="Diesel fuel, also called diesel oil or historically heavy oil, is any liquid fuel specifically designed for use in a diesel engine. Diesel engines are more fuel-efficient"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PriceRow;
