import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Hero from "./components/HeroSection";
import PriceRow from "./components/PriceSection";
import Graph from "./components/GraphSection";
import FuelPriceTable from "./components/TableSection";
import Footer from "./components/FooterSection";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [fuelDataAll, setFuelDataAll] = useState([]); // all data
  const [fuelDataGraph, setFuelDataGraph] = useState([]); // 6 months data
  const [currentPrice, setCurrentPrice] = useState([]);

  let fetchFuelDataAll = async () => {
    try {
      axios.defaults.baseURL = "http://localhost:4000";
      const response = await axios.get("/api/all-fuel-data");
      setFuelDataAll(response.data);
      console.log("All fuel data retrieved");
    } catch (error) {
      console.log(error);
    }
  };

  let sortCurrentPrice = () => {
    var last_object = fuelDataAll[fuelDataAll.length - 1];
    console.log(last_object);
    setCurrentPrice(last_object);
  };

  useEffect(() => {
    fetchFuelDataAll();
    sortCurrentPrice();
  }, []);

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
      <Col className="col-four" lg={12}>
        <Graph dataGraph={fuelDataAll} />
      </Col>
      <Row className="table-section">
        <Col className="d-flex justify-content-center" lg={12}>
          <FuelPriceTable dataTable={fuelDataAll} />
        </Col>
      </Row>
      <Row className="footer-section">
        <Col lg={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
