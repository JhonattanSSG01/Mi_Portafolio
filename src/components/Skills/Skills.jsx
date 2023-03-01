import "../Skills/skills.css";
import "../../pages/styles.css";
import React, { useState } from "react";

import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Progress,
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
                    <i className="ri-html5-fill"></i>
                    <Progress
                      animated
                      className="my-3 progress"
                      color="warning"
                      value="90"
                    />
                  </section>
                  <section>
                    <i className="ri-css3-fill"></i>
                    <Progress
                      animated
                      className="my-3 progress"
                      color="info"
                      value="80"
                    />
                  </section>
                  <section>
                    <i className="ri-github-fill"></i>
                    <Progress
                      animated
                      className="my-3 progress"
                      color="dark"
                      value="60"
                    />
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
                    <i className="ri-reactjs-line"></i>
                    <Progress animated className="my-3 progress" value="30" />
                  </section>
                  <section>
                    <i className="ri-trello-fill"></i>
                    <Progress
                      animated
                      className="my-3 progress"
                      color="info"
                      value="70"
                    />
                  </section>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
                <div className="skillsToggle">
                  <section>
                    <i className="ri-gitlab-fill"></i>
                    <Progress
                      animated
                      className="my-3 progress"
                      color="danger"
                      value="20"
                    />
                  </section>
                  <section>
                    <i className="ri-git-pull-request-fill"></i>
                    <Progress
                      animated
                      className="my-3 progress"
                      color="success"
                      value="50"
                    />
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
