import React,{useState} from "react";
import About from "./Components/About";
 import Navbar from "./Components/Navbar";
//  import Home from "./Components/Home";
 import Portfolio from "./Components/Portfolio";
 import Contact from "./Components/Contact";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

// export default function App() {
//   return (
//     <main className="text-gray-400 bg-gray-900 body-font">
//       <Navbar />
//       <About />
//       {/* <Projects />
//       <Skills />
//       <Testimonials />
//       <Contact /> */}
//     </main>
//   );
// }

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
