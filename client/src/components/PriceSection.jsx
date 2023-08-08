import { Container, Row, Col } from "react-bootstrap";

let Card = () => {
  return (
    <div className="card">
      <p>a card</p>
    </div>
  );
};

let PriceRow = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} sm={12}>
          <Card />
        </Col>
        <Col lg={6} sm={12}>
          <Card />
        </Col>
      </Row>
    </Container>
  );
};

export default PriceRow;
