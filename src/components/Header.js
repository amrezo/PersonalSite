import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ButtonToolbar,
  Button
} from "react-bootstrap";
import HeaderImage from "../images/header.svg";

function Header() {
  return (
    <Container>
      <Row>
        <Col style={{ marginTop: 150 }}>
          <h1 style={{ fontSize: 45 }}>
            <span role="img" aria-label="Hi">
              👋
            </span>{" "}
            Welcome to my personal corner on the internet.
          </h1>
          <p style={{ fontSize: 20 }}>
            My collection of personal side-projects and showcased portfolio
            pieces, as well as my resume.
          </p>
          <ButtonToolbar>
            <Button
              href="#"
              size="lg"
              variant="outline-primary"
              style={{ marginRight: 20 }}
            >
              My Work
            </Button>
            <Button href="#" size="lg" variant="outline-info">
              My Resume
            </Button>
          </ButtonToolbar>
        </Col>
        <Col>
          <div style={{ overflow: "hidden" }}>
            <Image
              src={HeaderImage}
              style={{ maxWidth: 500, marginTop: 100 }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
