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

// Componente Menu y Header
export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <header>
        <Navbar className="nav" id="nav">
          <NavbarBrand href="/" className="me-auto animate__animated animate__flash" style={{ width: "150px" }}>
            <div className="logo"></div>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="iconNav" />
          <Collapse className="collapses" isOpen={!collapsed} navbar>
            <Nav className="navCollapse" navbar>
              <NavItem className="navItemGlobal">
                <NavLink className="link">Sobre mí</NavLink>
              </NavItem>
              <NavItem className="navItemGlobal">
                <NavLink className="link">Habilidades</NavLink>
              </NavItem>
              <NavItem className="navItemGlobal">
                <NavLink className="link">Proyectos</NavLink>
              </NavItem>
              <NavItem className="navItemGlobal">
                <NavLink className="link">Contacto</NavLink>
              </NavItem>
              <NavItem className="navItem">
                <NavLink
                  className="resume animate__animated animate__wobble"
                  href="https://drive.google.com/file/d/1Yl1EB1KTZuDvQdxf6HzBjkfduWI7-z9E/view?usp=sharing"
                  target="_blank"
                >
                  Hoka de Vida
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
}
