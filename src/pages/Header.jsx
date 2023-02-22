import "./styles.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import About from "../components/AboutMe/About";

// Componente Menu y Header
export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <header>
        <Navbar className="nav" id="nav">
          <NavbarBrand href="/" className="me-auto" style={{ width: "150px" }}>
            <div className="logo"></div>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="iconNav" />
          <Collapse className="collapses" isOpen={!collapsed} navbar>
            <Nav className="navCollapse" navbar>
              <NavItem className="navItemGlobal">
                <NavLink className="link">About</NavLink>
              </NavItem>
              <NavItem className="navItemGlobal">
                <NavLink className="link">Skills</NavLink>
              </NavItem>
              <NavItem className="navItemGlobal">
                <NavLink className="link">Projects</NavLink>
              </NavItem>
              <NavItem className="navItemGlobal">
                <NavLink className="link">Contact</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink className="resume" href="https://drive.google.com/file/d/1Yl1EB1KTZuDvQdxf6HzBjkfduWI7-z9E/view?usp=sharing" target='_blank'>Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
}
