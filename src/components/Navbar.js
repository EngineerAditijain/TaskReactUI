import React from 'react';
import { Navbar, Nav, NavDropdown, Stack, Image, Figure } from 'react-bootstrap';
import logos from "./assets/logo.png";
import img1 from "./assets/Job.png";
import img2 from "./assets/CV.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/view.png";
import img5 from "./assets/edit.png";
import img6 from "./assets/settings.png";
import img7 from "./assets/security.png";
import img8 from "./assets/exit.png";
import "./Navbar.css"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-underline" style={{ height: '90px', position: "fixed", marginLeft: "20px",width:"100%" }}>
      <Navbar.Brand href="#home" >
        <Stack direction='horizontal' gap={1} className="d-flex align-items-center">
          <Image
            src={logos}
            width="57px"
            height="60px"
            style={{ marginTop: '10px', marginLeft: "80px" }}
            className="d-inline-block align-top img-fluid"
            alt="Logo"
          />
          <Nav.Link href="/" style={{
            marginTop: '20px',
            width: "169px",
            height: "19px",
            marginBottom: "10px"
          }} className="me-auto">Securing Digital World!</Nav.Link>
        </Stack>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" expand="lg" style={{ marginInlineEnd: "50px" }}>
        <Stack direction='horizontal' gap={3} style={{ marginLeft: "550px", marginBottom: "10px" }}>
          <Figure>
            <Figure.Image
              src={img1}
              width="41px"
              height="65px"
              style={{ marginTop: '30px' }}
              className="img-fluid"
              alt="Logo"
            />
            <Figure.Caption style={{ textAlign: 'center', fontWeight: "bold" }}>
              All Jobs
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image
              src={img2}
              style={{ marginTop: '30px' }}
              className="img-fluid"
              alt="Logo"
            />
            <Figure.Caption style={{ fontWeight: "bold" }}>
              Add a Candidate
            </Figure.Caption>
          </Figure>

          <Nav style={{ marginInlineEnd: "50px" }}>
            <Stack direction='vertical'>
              <img
                src={img3}
                width="40px"
                height="40px"
                style={{ marginTop: '30px', marginLeft: "1rem" }}
                className="img-fluid"
                alt="Logo"
              />
              <NavDropdown title="Profile" id="basic-nav-dropdown" style={{ marginBottom: "10px" }} >
                <Stack direction='horizontal' gap={2} style={{marginLeft:"10px"}}>
                  <Image
                    src={img4}
                    width="19px"
                    height="19px"
                  />
                  <NavDropdown.Item href="/" style={{fontFamily:"sans-serif"}}> View Profile </NavDropdown.Item>
                </Stack>
                <Stack direction='horizontal' gap={2} style={{marginLeft:"10px"}}>
                  <Image
                    src={img5}
                    width="19px"
                    height="19px"
                  />
                  <NavDropdown.Item href="/" style={{fontFamily:"sans-serif"}}> Edit Profile </NavDropdown.Item>
                </Stack>
                <Stack direction='horizontal' gap={2} style={{marginLeft:"10px"}}>
                  <Image
                    src={img6}
                    width="19px"
                    height="19px"
                  />
                  <NavDropdown.Item href="/" style={{fontFamily:"sans-serif"}}> Security Setting </NavDropdown.Item>
                </Stack>
                <Stack direction='horizontal' gap={2} style={{marginLeft:"10px"}}>
                  <Image
                    src={img7}
                    width="19px"
                    height="19px"
                  />
                  <NavDropdown.Item href="/" style={{fontFamily:"sans-serif"}}> Privacy Setting </NavDropdown.Item>
                </Stack>
                <Stack direction='horizontal' gap={2} style={{marginLeft:"10px"}}>
                  <Image
                    src={img8}
                    width="19px"
                    height="19px"
                  />
                  <NavDropdown.Item href="/" style={{fontFamily:"sans-serif"}}> Logout </NavDropdown.Item>
                </Stack>
              </NavDropdown>
            </Stack>
          </Nav>
        </Stack>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
