import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
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
            
          
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          
        </div>
      </HashRouter>
    );
  }
}

export default Header;