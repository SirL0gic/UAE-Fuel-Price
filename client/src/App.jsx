import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Hero from "./components/HeroSection";
import PriceRow from "./components/PriceSection";
import Graph from "./components/GraphSection";
import FuelPriceTable from "./components/TableSection";
import Footer from "./components/FooterSection";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPrice, setCurrentPrice] = useState([]); // current month
  const [fuelDataAll, setFuelDataAll] = useState([]); // all data
  const [fuelDataGraph, setFuelDataGraph] = useState([]); // 6 months data

  let fetchFuelDataAll = async () => {
    try {
      var dev = "http://localhost:4000";
      var production = "https://api.fuelwatch.xyz"
      axios.defaults.baseURL = production;

      const current_response = await axios.get("/api/all-fuel-data");

      setCurrentPrice(current_response.data[current_response.data.length - 1])
      setFuelDataGraph(current_response.data.slice(-6)); 
      setFuelDataAll(current_response.data);
     
      console.log("All Fuel Data Retrieved");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFuelDataAll();
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
          <PriceRow dataPrice={currentPrice}/>
        </Col>
      </Row>
      <Row className="graph-section"></Row>
      <Col className="col-four" lg={12}>
        <Graph dataGraph={fuelDataGraph} />
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
