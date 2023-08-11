import { Container, Row, Col, Card } from "react-bootstrap";

// USE SINGLE CARD ELSE THIS WILL NOT WORK AS PROPS NEED TO BE PSSED DOWN

let CardBox = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.price}</Card.Title>
        <Card.Text>{props.type}</Card.Text>
      </Card.Body>
    </Card>
  );
};

let PriceRow = (props) => {
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
            price={props.dataPrice}
            type="Super (98) has a high octane rating and is appropriate for high-performance gasoline automobiles. Super fuel is required for high-performance vehicles"
          />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox
            image="https://i.imgur.com/oMpEZpa.png"
            price="2.2 AED"
            type="Special (95) has a high octane rating and provides excellent performance in all gasoline-powered vehicles with medium compression engines. "
          />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox
            image="https://i.imgur.com/v8hiCr2.png"
            price="2.2 AED"
            type="E-Plus 91 fuel is typically used in engines with low compression. Customers who operate fleets and commercial trucks are likely to utilize this fuel"
          />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox
            image="https://i.imgur.com/kTjld9p.png"
            price="2.2 AED"
            type="Diesel fuel, also called diesel oil or historically heavy oil, is any liquid fuel specifically designed for use in a diesel engine. Diesel engines are more fuel-efficient"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PriceRow;
