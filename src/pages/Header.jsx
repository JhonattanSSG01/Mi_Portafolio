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
  TabContent,
  TabPane,
  Row,
  Col
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
  const [activeTab, setActiveTab] = useState('1');

  const changeTab = (numberTab) => {
    if(activeTab !== numberTab){
      setActiveTab(numberTab);
    } 
   }
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

        <div className="aboutMe">
          <h1 className="titlePrincipal">
            About Me <span className="sideRigth lineTrough"></span>
          </h1>
          <img
            className="mt-3 mb-3"
            src={About}
            alt="Imagen alusiva a mi"
            width={"100%"}
            style={{ opacity: "50%" }}
          />
          <p className="aboutDesc p-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>

        <div className="skills">
          <h1 className="titlePrincipal pt-5 pb-5">
            Skills <span className="sideLeft lineTrough"></span>
          </h1>
        </div>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => changeTab("1")}
              style={{ fontSize: "24px", color: "var(--colorDark)" }}
            >
              Level 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => changeTab("2")}
              style={{ fontSize: "24px", color: "var(--colorDark)" }}
            >
              Level 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => changeTab("3")}
              style={{ fontSize: "24px", color: "var(--colorDark)" }}
            >
              Level 3
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
                <div className="skillsToggle">
                  <section>
                    <i className="ri-html5-fill">
                      {" "}
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-css3-fill">
                      {" "}
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-github-fill">
                      {" "}
                      <span></span>
                    </i>
                  </section>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
                <div className="skillsToggle">
                  <section>
                    <i className="ri-reactjs-line">
                      {" "}
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-trello-fill">
                      {" "}
                      <span></span>
                    </i>
                  </section>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
                <div className="skillsToggle">
                  <section>
                    <i className="ri-gitlab-fill">
                      {" "}
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-git-pull-request-fill">
                      {" "}
                      <span></span>
                    </i>
                  </section>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
}
