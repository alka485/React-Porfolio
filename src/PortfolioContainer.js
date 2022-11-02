import React from "react";

import About from "./Components/About";

import Card from 'react-bootstrap/Card';
// import Nav from 'react-bootstrap/Nav';

function WithHeaderExample() {
    return (
    <Card className="Light" border="primary" style={{ width: '50rem' }}>
      <Card.Header as = "h1">Alka Sah </Card.Header>

      {/* <Nav variant="pills" className="Light" defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Resume</Nav.Link>
      </Nav.Item>
    </Nav> */}
      
      <Card.Body>
         <Card.Link href="/About">About Me</Card.Link>
        <Card.Link href="#">Portfolio</Card.Link>
        <Card.Link href="#">Contact</Card.Link>
        <Card.Link href="#">Resume</Card.Link>     
      </Card.Body>
      {/* </Card.ImgOverlay> */}
    </Card>
  );
}

export default WithHeaderExample;