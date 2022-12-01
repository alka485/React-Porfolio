import React from "react";
// import { Navbar } from "react-bootstrap";
// import {NavLink} from "react-router-dom";

function Navigation(props) {
  const tabs = ['about','portfolio','contact'];
  return (
    <ul className="nav">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onclick = {() => props.handlePageChange(tab)}
            className = {
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
            >
            {tab}
            </a>
        </li>
      ))}

    </ul>
    // <div>
    //   <Navbar expand="lg" bg="dark" sticky="top">
    //     <NavLink className="nav-link" to="/">
    //       <div class="text-light">
    //         <h4 class="nav-title-font">Alka Sah</h4>
    //       </div>
    //     </NavLink>
    //     <ul class="navbar-nav ml-auto navitem-indent">
    //       <li class="nav-item">
    //         <NavLink to="/about">
    //           <div class="nav-font text-light">About Me</div>
    //         </NavLink>
    //       </li>
    //       <li class="nav-item">
    //         <NavLink to="/portfolio">
    //           <div class="nav-font text-light">Portfolio</div>
    //         </NavLink>
    //       </li>
    //       <li class="nav-item">
    //         <NavLink to="/contact">
    //           <div class="nav-font text-light">Contact</div>
    //         </NavLink>
    //       </li>
    //       <li class="nav-item">
    //         <NavLink to="/resume">
    //           <div class="nav-font text-light">Resume</div>
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </Navbar>
    // </div>
  );
}

export default Navigation;


