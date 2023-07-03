import React from 'react';
import { Container, Image, Nav, Stack } from 'react-bootstrap';
import "./Sidebar.css"; // Import custom CSS file
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";


const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={img3} alt="Logo" />
        <h6>Dr. Arvind K</h6>
      </div>
      <Stack direction='horizontal' gap={1} style={{ marginInlineStart: "30px" }} className="sidebar-item">
        <Image src={img4} alt="Jobs" />
        <Container className="sidebar-label" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Jobs</Container>
      </Stack>
      <Stack direction='vertical' gap={2} style={{ marginInlineStart: "65px" }} className="sidebar-submenu">
        <Nav.Link href="/home">Marked Jobs</Nav.Link>
        <Nav.Link href="/home">Referred Jobs</Nav.Link>
        <Nav.Link href="/home">Closed Jobs</Nav.Link>
      </Stack>
      <Stack direction='horizontal' gap={1} style={{ marginInlineStart: "30px", marginTop: "20px" }} className="sidebar-item">
        <Image src={img5} alt="Candidates" />
        <Container className="sidebar-label" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Candidates</Container>
      </Stack>
      <Stack direction='vertical' gap={2} style={{ marginInlineStart: "65px" }} className="sidebar-submenu">
        <Nav.Link href="/addCandidate">Add a candidate to your database</Nav.Link>
        <Nav.Link href="/home">Your Candidates Database</Nav.Link>
        <Nav.Link href="/home">Referred Candidates</Nav.Link>
        <Nav.Link href="/home">Selected Candidates</Nav.Link>
      </Stack>
      <Stack direction='horizontal' gap={1} style={{ marginInlineStart: "30px", marginTop: "20px" }} className="sidebar-item">
        <Image src={img6} alt="Referrals" />
        <Container >
          <Nav.Link href="/home" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Referrals</Nav.Link>
        </Container>
      </Stack>
      <Stack direction='horizontal' gap={1} style={{ marginInlineStart: "30px", marginTop: "20px" }} className="sidebar-item">
        <Image src={img7} alt="View/Update Profile" />
        <Container className="sidebar-label">
          <Nav.Link href="/home" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>View/Update Profile</Nav.Link>
        </Container>
      </Stack>
      <Stack direction='horizontal' gap={1} style={{ marginInlineStart: "30px", marginTop: "20px" }} className="sidebar-item">
        <Image src={img8} alt="Settings" />
        <Container className="sidebar-label">
          <Nav.Link href="/home" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Settings</Nav.Link>
        </Container>
      </Stack>
      <Stack direction='horizontal' gap={1} style={{ marginInlineStart: "30px", marginTop: "20px" }} className="sidebar-item">
        <Image src={img9} alt="Logout" />
        {/* <Container className="d-inline-block d-lg-none">Logout</Container> */}
        <Container className="sidebar-label">
          <Nav.Link href="/home" style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Logout</Nav.Link>
        </Container>
      </Stack>
    </div>
  );
};

export default Sidebar;
