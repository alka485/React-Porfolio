import React, { useState } from "react";

import Navigation from "../Components/Navigation";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Contact from '../Components/Contact';
import Resume from '../Components/Resume';

export default function Header () {

  const [currentPage,handlePageChange] = useState('About');
  
  const renderPage = () => {
    switch(currentPage) {
      case "About":
        return <About/>
        case "Contact":
          return <Contact/>
          case "Portfolio":
            return<Portfolio/>
          case "resume" :
            return<Resume/>
           default:
            return<About/> 
    }
   
  };
  return(
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    <div>
      {
        renderPage()
      }
      </div>  
    </div>
  );
}
