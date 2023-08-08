import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Hero from "./components/HeroSection";
import PriceRow from "./components/PriceSection";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [fuelData, setFuelData] = useState([null]);

  axios.defaults.baseURL = "";

  useEffect(() => {}, []);

  return (
    <Container fluid className="main-container">
      <Row className="hero-section">
        <Col className="col-one" lg={12}>
          <Hero />
        </Col>
      </Row>
      <Row className="price-section">
        <Col className="col-four" lg={12}>
          <PriceRow />
        </Col>
      </Row>
      <Row className="graph-section"></Row>
      <Row className="table-section"></Row>
      <Row className="footer-section"></Row>
    </Container>
  );
}

export default App;
