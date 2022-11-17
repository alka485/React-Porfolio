import React from "react";
import Card from 'react-bootstrap/Card';

// console.log("About Page");

function About () {
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
              <Card.Body>
                <Card.Title>Alka Sah </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href = "/About">About Me</Card.Link>
                <Card.Link href = "/">Portfolio</Card.Link>
                <Card.Link href = "/">Contact</Card.Link>
                <Card.Link href = "/">Resume</Card.Link>
              </Card.Body>
            </Card>
          ))}
          </>
 
}

export default About()




        // <section className="main section">
        //     <div className="about">
        //     <div className="text">
        //         <div  className="header">
        //             <h1>About Me</h1>
        //         </div>
        //         <p>Hello there! I'm Sienna Li! I'm a web developer and designer based in San Francisco Bay Area.<br/>⠀</p>
        //         <p>Having spent a large chunk of my life in arts and music, I've finally found my passion at the web design and technology. I'm an exceptionally creative designer and a coding elf.<br/>⠀</p>
        //         <p>Currently I'm a student at <a className="school"href="https://bootcamp.berkeley.edu/coding/" target="_blank" rel="noreferrer">UC Berkeley Bootcamp</a> and spend most of my time designing websites. 
        //         When I'm not busy, you can find me obsessing over food, cats and traveling. 
        //         <br/>⠀</p>
        //     </div>
        //     <div className="avatar"></div> 
        //     </div>
        // </section>
    
