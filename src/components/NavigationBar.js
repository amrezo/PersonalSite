import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <div className="container">
      <Navbar bg="default" variant="light">
        <Navbar.Brand href="#">Amr Al-Refae</Navbar.Brand>
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
