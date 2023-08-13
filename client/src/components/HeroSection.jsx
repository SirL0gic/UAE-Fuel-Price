import { Container, Row, Col } from "react-bootstrap";
import carLogo from "../assets/car.svg"


let Hero = () => {
  return (
    <Container fluid className="hero">
      <Row>
        <Col className="col-two" lg={6}>
          <div className="headings-box">
            <h1>Fuel Watch UAE</h1>
            <h2>Navigating Past & Present Fuel Prices</h2>
          </div>
        </Col>
        <Col className="col-three" lg={6}>
          <div className="image-box">
            <img src={carLogo} alt="car"/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;