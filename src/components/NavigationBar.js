import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Amr Al-Refae</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Portfolio</Nav.Link>
        <Nav.Link href="#pricing">Contact Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
