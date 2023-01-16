import "../Skills/skills.css";
import "../../pages/styles.css"
import React, { useState } from "react";

import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

export function Skills() {
  const [activeTab, setActiveTab] = useState("1");

  const changeTab = (numberTab) => {
    if (activeTab !== numberTab) {
      setActiveTab(numberTab);
    }
  };

  return (
    <>
      <div className="skills">
        <h1 className="titlePrincipal pt-3 pb-3">
          Skills <span className="sideLeft lineTrough"></span>
        </h1>
        <Nav tabs>
          <NavItem className="navItem">
            <NavLink
              className={`navLink ${activeTab === "1" ? "active" : ""}`}
              onClick={() => changeTab("1")}
            >
              Level 1
            </NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink
              className={`navLink ${activeTab === "2" ? "active" : ""}`}
              onClick={() => changeTab("2")}
            >
              Level 2
            </NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink
              className={`navLink ${activeTab === "3" ? "active" : ""}`}
              onClick={() => changeTab("3")}
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
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-css3-fill">
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-github-fill">
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
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-trello-fill">
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
                      <span></span>
                    </i>
                  </section>
                  <section>
                    <i className="ri-git-pull-request-fill">
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
