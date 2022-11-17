import React from "react";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import About from './Components/About';
//import { Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
           <Route path="/About"element = {<About />} />
           <Route path='/' element = {<Home />} />
           
           </Routes>

            
         </Router>
  )
}

export default App;