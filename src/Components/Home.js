import React from 'react';
import Card from 'react-bootstrap/Card';
function Home () {
    return(
<>
        {[
            'Light'           
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '50rem' }}
              className="mb-2"
            >
              <Card.Header as = 'h8'>Alka Sah
              
              <Card.Link href = "/About">About Me</Card.Link>
                <Card.Link href = "/Portfolio">Portfolio</Card.Link>
                <Card.Link href = "/">Contact</Card.Link>
                <Card.Link href = "/">Resume</Card.Link>
                
                </Card.Header>  
              <Card.Body>
                <Card.Title>Alka Sah </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href = "/About">About Me</Card.Link>
                <Card.Link href = "/Portfolio">Portfolio</Card.Link>
                <Card.Link href = "/">Contact</Card.Link>
                <Card.Link href = "/">Resume</Card.Link>
              </Card.Body>
            </Card>
          ))}
          </>
   )
}
 export default Home;
