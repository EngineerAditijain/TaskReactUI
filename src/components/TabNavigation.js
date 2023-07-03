import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';

const TabNavigation = ({ activeTab, handleTabChange }) => {
  return (
    <>
      <style>
        {`
          .tab-navigation {
            position: relative;
            z-index: 0;
            margin-top: -239px;
          }

          .tab-link {
            color: black;
            text-decoration: none;
          }

          .active-tab-link {
            color: blue;
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .tab-navigation {
              margin-top: 2rem;
              
            }
          }
        `}
      </style>

    <Nav variant="tabs" activeKey={activeTab} onSelect={handleTabChange} style={{ position: 'static', marginTop: "-239px",zIndex:"0" }}>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/generalDetail" eventKey="1" className="tab-link" activeclassname="active-tab-link">
          General<br/>Detail
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/educationalDetail" eventKey="2" className="tab-link" activeclassname="active-tab-link">Educational<br/> Detail</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/professionalExperience" eventKey="3" className="tab-link" activeclassname="active-tab-link">Professional<br/>Experience</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/skills"eventKey="4" className="tab-link" activeclassname="active-tab-link">Skill and<br/>Expertise</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/additionalDetail"eventKey="5" className="tab-link" activeclassname="active-tab-link">Aditional<br/>Detail</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/contact" eventKey="6" className="tab-link" activeclassname="active-tab-link">Conatct<br/>Detail</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  );
};


export default TabNavigation;
