import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "../components/WorkCard";
import AmrezoImage from "../images/amrezo.png";
import VitaeomImage from "../images/vitaeom.png";
import SimplCRM from "../images/simplCRM.png";

function MyWork() {
  return (
    <Container style={{ marginTop: 150 }}>
      <h1>A Sample of My Work</h1>
      <Row style={{ marginTop: 30, marginBottom: 150 }}>
        <Col>
          <WorkCard
            title="Vitaeom"
            desc="Vitaeom is an Instagram automatic scheduling web app allowing you to auto-post and schedule posts ahead of time."
            link="#"
            imgSrc={VitaeomImage}
          />
        </Col>
        <Col>
          <WorkCard
            title="Amrezo"
            desc="My personal site built using ReactJS and other common web technologies to showcase my work and resume."
            link="#"
            imgSrc={AmrezoImage}
          />
        </Col>
        <Col>
          <WorkCard
            title="SimplCRM"
            desc="A simple and intuitive CRM and project management tool built specifically for freelancers."
            link="#"
            imgSrc={SimplCRM}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MyWork;
