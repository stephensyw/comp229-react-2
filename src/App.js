// Filename - App.js
 
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about-me";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Contact from "./pages/contact-me";


function App() {
    return (
      <Router>
        <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                  path="/contact"
                  element={<Contact />}
              />
              <Route path="/services" element={<Services />} />
              <Route
                  path="/projects"
                  element={<Projects />}
              />
          </Routes>
  </Router>
);
}
 
export default App;