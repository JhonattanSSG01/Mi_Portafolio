import './styles.css';
import Logo from './assets/LogoHeader.png';
import Background from './assets/banner.jpg';
import About from './assets/aboutMe.png';
import Contact from './assets/contact.png';
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

function NavHeader(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <img src={Logo} alt="Logo personal" style={{ width: "100px" }} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{ textAlign: "center" }}>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{width: 80, margin: 'auto', border: '3px solid var(--colorSecondary)', borderRadius: 5 }}>Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavHeader;


export const Header = () => {
  return (
    <>
      <NavHeader />
      <div className="container p-0">
        <Card className="containerBanner" inverse>
          <CardImg className="banner" alt="Card image cap" src={Background} />
          <CardImgOverlay className="containerText pt-5 pb-5 text-center">
            <CardTitle tag="h3" className="titleHi sizeText">
              Hola Mundo, my name is <span>Jhonattan Saavedra Gómez</span>
            </CardTitle>
            <CardText tag="h3" className="titleMuted mb-4">
              <small>I turn people's ideas into web creativity.</small>
            </CardText>
            <CardText className="description sizeText">
              I'm a growing FullStack Web Developer focused on front-end but
              with basic knowledge in Back-end. I’m passionate about technology
              and enjoy being able to build things based on imaginative ideas
              through creativity.
            </CardText>
            <NavLink className="button">See More</NavLink>
          </CardImgOverlay>
        </Card>

        <hr className="lineBlue line" />
        <hr className="lineLigthBlue line" />

        {/* <img src={About} alt="Imagen alusiva a mi" width={'100%'} /> */}
      </div>
    </>
  );
}
