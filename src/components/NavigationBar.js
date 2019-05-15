import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.svg";

function NavigationBar() {
  return (
    <div className="container">
      <Navbar bg="default" variant="light">
        <Navbar.Brand href="#">
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">My Work</Nav.Link>
          <Nav.Link href="#">Resume</Nav.Link>
          <Nav.Link href="#">Contact Me</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
