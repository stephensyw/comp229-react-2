/*
 * File name: App.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */


// import necessary resources
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


// Import different page components
import Home from "./pages/index";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Contact from "./pages/contact-me";
import ThankYouPage from "./pages/thank-you";


// Main App component
function App() {
    return (
      /* Using Router to enable routing in the app */
      <Router>

        {/* Navbar component displayed on all pages */}
        <Navbar />

          {/* Defining Routes for the application */}
          <Routes>

              {/* Route for Home page */}
              <Route exact path="/" element={<Home />} />

              {/* Route for About Me page */}
              <Route path="/about" element={<Home />} />

              {/* Route for Contact Me page */}
              <Route path="/contact" element={<Contact />} />

              {/* Route for Services page */}
              <Route path="/services" element={<Services />} />

              {/* Route for Projects page */}
              <Route path="/projects" element={<Projects />} />

              {/* Route for Thank You page */}
              <Route path="/thank-you" element={<ThankYouPage />} />

          </Routes>
  </Router>
);
}

// Export the main App component as the default export
export default App;
