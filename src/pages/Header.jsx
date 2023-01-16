import "./styles.css";
import LogoHeader from "../assets/LogoHeader1.png";
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

// Componente Menu y Header
export function NavHeader() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <header>
        <Navbar className="nav" color="faded" light>
          <NavbarBrand href="/" className="me-auto" style={{flexBasis: '75%'}}>
            <img
              src={LogoHeader}
              alt="Logo personal"
              width={'40%'}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="iconNav" />
          <Collapse className="collapses" isOpen={!collapsed} navbar>
            <Nav className="navCollapse" navbar>
              <NavItem className="navItem">
                <NavLink className="border">About</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink className="border">Skills</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink className="border">Projects</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink className="border">Contact</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink className="resume p-2">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
}

