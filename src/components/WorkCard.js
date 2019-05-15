import React from "react";
import { Card, Button } from "react-bootstrap";

function WorkCard(props) {
  return (
    <Card style={{ marginRight: 10, marginBottom: 20 }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href={props.link} variant="outline-primary">
          Explore Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WorkCard;
