import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function Portfolio () {
  return (  
  <> 
        {[
            'Light'           
          ].map((variant) => (
            <CardGroup>
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '60rem' }}
              className="mb-2"
              border="dark"              
            >
              <Card.Header as style={{backgroundColor:"lemonchiffon"}} >Alka Sah
                <Card.Link href = "/About">About Me</Card.Link>
                <Card.Link href = "/Portfolio">Portfolio</Card.Link>
                <Card.Link href = "/">Contact</Card.Link>
                <Card.Link href = "/">Resume</Card.Link>
              </Card.Header>  
              {/* <Card.Img variant="top" src="../../public/Portfolio.jpg" />   */}
              <Card.Body style={{backgroundColor : "lightcyan"}}>
                <Card.Title>Portfolio </Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </CardGroup>
          ))}
          </>
  )
}

export default Portfolio;




       
