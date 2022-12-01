import React ,{ useState}from 'react';
import { Row,Col } from 'react-bootstrap';
import Resume from '../assets/resume.pdf'

export default function Contact() {
  // const [email, setEmail] = useState('');
  // const [userName, setUserName] = useState('');
  // const [message, setMessage] = useState('');

  // const handleInputChange = (e) => {
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputType === 'userName') {
  //     setUserName(inputValue);
  //   } else {
  //     setMessage(inputValue);
  //   }
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   setUserName('');
  //   setEmail('');

  // };

  // return (
  //   <div style={{width : "60rem"}}>
  //     <h1>Contact Page</h1>
  //     <form className="form">
  //       <p>Name : </p>
  //     <input
  //         value={userName}
  //         name="userName"
  //         onChange={handleInputChange}
  //         type="text"
  //         placeholder="username"
  //       />
  //       <p>Email :</p>
  //       <input
  //         value={email}
  //         name="email"
  //         onChange={handleInputChange}
  //         type="email"
  //         placeholder="email"
  //       />
  //       <p>Message :</p>
  //       <textarea
  //       value={message}
  //       name="message"
  //       onChange={handleInputChange}
  //       type="message"
  //       placeholder='Message'
  //      />
  //       <button type="button" onClick={handleFormSubmit}>Submit</button>
  //     </form>
      
  //   </div>
      
 // );

 <section>
        <h1 data-testid='h1tag' className="contact">contact me</h1>

        <div className="contact-icons">
        <Row>
            <Col lg={3} md={12}>
            <a href="https://github.com/nicolewallace09"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt="github-logo" class="icon"/></a><p class="icon-text">github</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/nicole-wallace09/"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt="linkedin-logo" class="icon"/></a><p class="icon-text">linkedin</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="mailto:nicole.elisaw@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt="mail-logo"/></a><p class="icon-text">email</p>
            </Col>

            <Col lg={3} md={12}>
            <a href={Resume} download><img src="https://img.icons8.com/doodle/120/000000/pdf-2.png" alt="resume" /></a><p class="icon-text">resume</p>
            </Col>
        </Row>
        </div>

        <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 class="resume">font-end technologies</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework (Bootstrap, Materalize)
                    </li>
                    <li>
                        UI/UX Design
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 class="resume">back-end technologies</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL (mysql lite3, mysql2)
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                </ul>
            </Col>

        <Col lg={4} md={12}>
        <h2 class="education">my education</h2>
        <p>
          <span className="school-name">UC BERKELEY EXTENSION</span><br></br>
          Full Stack Boot Camp - Certification 
          <br></br>
          <br></br>
          <span className="school-name">SAN FRANCISCO STATE UNIVERSITY</span><br></br>
          Business Admin & Management - BS
          <br></br>
          <br></br>
          <span className="school-name">LOS MEDANOS COLLEGE</span><br></br>
          Liberal Arts: Arts & Humanities - AA<br></br>
          Liberal Arts: Math & Science - AS<br></br>
          Liberal Arts: Biological & Social Science - AA<br></br>
          Business Administration - AS
        </p>
        </Col>
        </Row>
        </div>

    </section>
    
}
