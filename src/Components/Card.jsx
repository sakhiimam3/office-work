import React from "react";
import { Button, Card } from "react-bootstrap";
const Cards = (props) => {
  return (
    <Card style={{ width: "18rem", }}>
      <Card.Img variant="bottom" className="img-fluid" src={props.imgsrc} />
      <Card.Body>
        <Card.Title>{props.UpperLine}</Card.Title>
      </Card.Body>
        <Button className="my-2">Details</Button>
    </Card>
  );
};

export default Cards;
