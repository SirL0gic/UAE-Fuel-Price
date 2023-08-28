import { useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { parse, getYear, format } from "date-fns"; // safari and macos need this for dates

const FuelPriceTable = (props) => {

  // Get the current date formatted as "Month Year" (e.g., "February 2023")
  const currentMonthYear = format(new Date(), "MMMM yyyy");
  
  // Parse the formatted date to a Date object and extract the year
  const yearFromFormattedDate = getYear(
    parse(currentMonthYear, "MMMM yyyy", new Date())
  );

  // Initial state set to the current year using the parsed value
  const [currentYear, setCurrentYear] = useState(yearFromFormattedDate);

  // Helper function to filter data by year
  const getDataForYear = (data, year) => {
    return data.filter(
      (item) => getYear(parse(item.date, "MMMM yyyy", new Date())) == year
    );
  };

  const dataForCurrentYear = getDataForYear(props.dataTable, currentYear);

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
              {dataForCurrentYear.map((row, index) => (
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
          <div className="text-center">
            <div className="pagination-buttons">
              {" "}
              <button
                className="pag-prev"
                onClick={() => setCurrentYear(currentYear + 1)}
              >
                Prev
              </button>
              <button
                className="pag-next"
                onClick={() => setCurrentYear(currentYear - 1)}
              >
                Next
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FuelPriceTable;
