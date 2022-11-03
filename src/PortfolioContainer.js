import React from "react";
import Card from 'react-bootstrap/Card';

function PortfolioContainer() {
    return (
    <Card className="Light" border="primary" style={{ width: '50rem' }}>
      <Card.Header as = "h1">Alka Sah </Card.Header>
    <Card.Body >
         <Card.Link href="/About" >About Me</Card.Link>
        <Card.Link href="#">Portfolio</Card.Link>
        <Card.Link href="#">Contact</Card.Link>
        <Card.Link href="#">Resume</Card.Link>    
      </Card.Body>
      
    </Card>
  );
}


export default PortfolioContainer;