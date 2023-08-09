import React from 'react';
import { Table } from 'react-bootstrap';


const FuelPriceTable = () => {
    
const data = [
    {
        date: 'March 2023',
        super98: '3.09',
        special95: '2.97',
        ePlus91: '2.90',
        diesel: '3.14',
      },
      {
        date: 'April 2023',
        super98: '3.01',
        special95: '2.90',
        ePlus91: '2.82',
        diesel: '3.03',
      },
      {
        date: 'May 2023',
        super98: '3.16',
        special95: '3.05',
        ePlus91: '2.97',
        diesel: '2.91',
      },
      {
        date: 'June 2023',
        super98: '2.95',
        special95: '2.84',
        ePlus91: '2.76',
        diesel: '2.68',
      },
      {
        date: 'July 2023',
        super98: '3.00',
        special95: '2.89',
        ePlus91: '2.81',
        diesel: '2.76',
      },
      {
        date: 'August 2023',
        super98: '3.14',
        special95: '3.02',
        ePlus91: '2.95',
        diesel: '2.95',
      },
  ];
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Super 98</th>
          <th>Special 95</th>
          <th>E Plus 91</th>
          <th>Diesel</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
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
  );
};

export default FuelPriceTable;
