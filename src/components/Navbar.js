/*
 * File name: components/Navbar.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */

// ========== MAIN CONTENT SCRIPTS ==========

// import necessary resources
import React from "react";
import logo from '../assets/logo.png'; 
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";
 
// Define the Navbar component
// note: { Nav, NavMenu, NavLink } are components that are created by NavbarElements.js
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>

                    {/* Link to the home page */}
                    <NavLink to="/" activeStyle>
                        <div>
                            <img src={logo} alt="Custom Logo" height="50px" width="50px"/>
                        </div>
                    </NavLink>

                    {/* Link to the About Me page */}
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>

                    {/* Link to the Projects page */}
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>

                    {/* Link to the Services page */}
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>

                    {/* Link to the Contact Me page */}
                    <NavLink to="/contact" activeStyle>
                        Contact Me
                    </NavLink>
                    
                </NavMenu>
            </Nav>
        </>
    );
};

// Export the Navbar component for use in other parts of the application
export default Navbar;
