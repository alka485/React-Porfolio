import React from 'react';
import myImage from '../assets/Portfolio page.jpg';
import { Col } from 'react-bootstrap';

export default function About() {
  return (
    <section className='title'>
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="Alka Sah" width= "300" height= "300" style={{borderRadius : "50%"}}/></center>
      <p class = "name">Alka Sah</p>
      <p class="job">full stack web developer</p>
      <h2 class="education">a little about me</h2>
      <p>
         Hello There ! I am Alka Sah. Having spent of a large chunk of my life  in Banking and customer service . I have finally found my passion
         in web design and technology. I'm an exceptionally creative designer and a coding elf.  I also create,evaluate,and improve product designs.
         truly believe in what I am doing as an user experience evangelist.  
      </p>
      </Col>
      </div>
    </section>
  );
}