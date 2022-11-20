import React from "react";
import { CardGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import projects from './Portfolio.json';

function Portfolio () {
  
  return (
    <>
    {[
            'Light'           
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '60rem' }}
              className="mb-2"
              border="dark"
            >
               <Card.Header as = 'h5'style={{backgroundColor:"lemonchiffon"}} >Alka Sah
                 <Card.Link href = "/About">About Me</Card.Link>
                 <Card.Link href = "/Portfolio">Portfolio</Card.Link>
                 <Card.Link href = "/">Contact</Card.Link>
                 <Card.Link href = "/">Resume</Card.Link>
               </Card.Header> 
               <Card.Body style={{backgroundColor : "lightcyan"}}>
                 <Card.Title>Portfolio</Card.Title>
                 <br/>
                 <Row xs={1} md={2} className="g-4" style={
                  {backgroundColor:"LavenderBlush",border:"1px solid"}
                }>
                {Array.from({ length: 1 }).map((_,idx)=>(
                  <Col>
                  <Card.Text>
                    <div>
                    <img src= "https://thumbs.dreamstime.com/z/social-network-background-media-icons-19657087.jpg" alt= "Social Network API" width="200px"></img>
                    </div>
                    <div>
                   <a href="https://github.com/alka485/Social-Network-API.git">Github</a>
                   <br/>
                   <a href="https://drive.google.com/file/d/1_oYhl9h4DP8q40TVd7Hw1i9aRY3ie-rW/view">SocialNetwork</a>
                   </div>                   
                  </Card.Text>
                  </Col>
                  
                ))}
                </Row>
                
              </Card.Body>
            </Card>
          ))}
   
   </>
  
      );  
}

export default Portfolio;




       
