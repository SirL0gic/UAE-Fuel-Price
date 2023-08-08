import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Components
import { Container, Row, Col } from "react-bootstrap";
import Hero from './components/HeroSection';

// Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Container fluid className="main-container">
    <Row className="hero-section">
      <Col className="col-one">
        <Hero/>
      </Col>
    </Row>
    <Row className="price-section"></Row>
    <Row className="graph-section"></Row>
    <Row className="table-section"></Row>
    <Row className="footer-section"></Row>

   </Container>
  )
}

export default App
