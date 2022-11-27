import React, { Component } from "react";
import { Route,Routes, HashRouter } from "react-router-dom";
import Navigation from "../Components/Navigation";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Contact from '../Components/Contact';
import Resume from '../Components/Resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
            
          <Routes>
          <Route path="/about" element = {<About/>} />
          <Route path="/portfolio" element = {<Portfolio/>} />
          <Route path="/contact" element ={<Contact />}/>
          <Route path="/resume" element = {<Resume/>}/>
          </Routes>
          
        </div>
      </HashRouter>
    );
  }
}

export default Header;