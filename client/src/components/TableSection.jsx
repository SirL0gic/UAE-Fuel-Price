import { Container, Table, Row, Col } from "react-bootstrap";

const FuelPriceTable = (props) => {
  return (
    <Container fluid className="table-container">
      <Row>
        <Col lg={12}>
          <Table striped bordered hover className="main-table">
            <thead>
              <tr>
                <th style={{ color: "black" }}>Date</th>
                <th style={{ color: "black" }}>Super 98</th>
                <th style={{ color: "black" }}>Special 95</th>
                <th style={{ color: "black" }}>E Plus 91</th>
                <th style={{ color: "black" }}>Diesel</th>
              </tr>
            </thead>
            <tbody>
              {props.dataTable.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.super98}</td>
                  <td>{row.special95}</td>
                  <td>{row.ePlus91}</td>
                  <td>{row.diesel}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default FuelPriceTable;
