import React from "react";
import logo from '../assets/logo.png'; 
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        <div className="navbar-logo">
                            <img src={logo} alt="Custom Logo" height="50px" width="50px"/>
                        </div>
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
