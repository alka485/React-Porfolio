import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function About () {
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
              {/* <Card.Img variant="top" src="../../public/Portfolio.jpg" />   */}
              <Card.Body style={{backgroundColor : "lightcyan"}}>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                      Hello There ! I am Alka Sah. Having spent of a large chunk of my life  in Banking and customer service . I have finally found my passion
                      in web design and technology. I'm an exceptionally creative designer and a coding elf.
                {/* <Card.Img variant="top" src="../../public/Portfolio.jpg" />   */}

                </Card.Text>
                
              </Card.Body>
            </Card>
          ))}
          </>
  )
}

export default About;




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
    
