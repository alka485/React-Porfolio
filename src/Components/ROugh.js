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

// import React from "react";
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

// function About () {
//   return (
//   <>
//         {[
//             'Light'           
//           ].map((variant) => (
//             <Card
//               bg={variant.toLowerCase()}
//               key={variant}
//               text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//               style={{ width: '60rem' }}
//               className="mb-2"
//               border="dark"
//             >
//               <Card.Header as = 'h5'style={{backgroundColor:"lemonchiffon"}} >Alka Sah
//                 <Card.Link href = "/About">About Me</Card.Link>
//                 <Card.Link href = "/Portfolio">Portfolio</Card.Link>
//                 <Card.Link href = "/">Contact</Card.Link>
//                 <Card.Link href = "/">Resume</Card.Link>
//               </Card.Header>  
//               {/* <Card.Img variant="top" src="../../public/Portfolio.jpg" />   */}
//               <Card.Body style={{backgroundColor : "lightcyan"}}>
//                 <Card.Title>About Me</Card.Title>
//                 <Card.Text>
//                       Hello There ! I am Alka Sah. Having spent of a large chunk of my life  in Banking and customer service . I have finally found my passion
//                       in web design and technology. I'm an exceptionally creative designer and a coding elf.
//                 {/* <Card.Img variant="top" src="../../public/Portfolio.jpg" />   */}

//                 </Card.Text>
                
//               </Card.Body>
//             </Card>
//           ))}
//           </>
//   )
// }

// export default About;




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
    




        // import React from "react";
        // import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
        // import 'bootstrap/dist/css/bootstrap.min.css';
        
        // import Home from './Components/Home';
        // import About from './Components/About';
        // import Portfolio from "./Components/Portfolio";
        // //import { Route } from "react-router-dom";
        
        // function App() {
        //   return (
        //   <Router>
        //     <Routes>
        //            <Route path="/About"element = {<About />} />
        //            <Route path='/' element = {<Home />} />
        //            <Route path='/Portfolio' element = {<Portfolio />} />
                   
        //            </Routes>
        
                    
        //          </Router>
        //   )
        // }
        
       
