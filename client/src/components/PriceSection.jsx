import { Container, Row, Col, Card } from "react-bootstrap";

// USE SINGLE CARD ELSE THIS WILL NOT WORK AS PROPS NEED TO BE PSSED DOWN

let CardBox = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://i.imgur.com/oMpEZpa.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

let PriceRow = () => {
  return (
    <Container fluid className="price-card-container">
      <Row className="price-card-container-row">
        <Col lg={3} sm={12}>
          {" "}
          <CardBox />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox />
        </Col>
        <Col lg={3} sm={12}>
          {" "}
          <CardBox />
        </Col>
      </Row>
    </Container>
  );
};

export default PriceRow;

// https://i.imgur.com/oMpEZpa.png
