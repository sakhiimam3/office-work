import React from 'react'
import {Card, Col, Container,Row} from "react-bootstrap"
const Cards = (props) => {

  return (
    <Container >
      <Row>
        <Col sm={4}>
        <Card style={{ width: '18rem' ,height:"2rem" }}>
    <Card.Img variant="top"  src={props.imgsrc} />
    <Card.Body>
      <Card.Title>{props.UpperLine}</Card.Title>
      
    </Card.Body>
  </Card>
        </Col>
     
      </Row>
       
    </Container>
   

  )
}    

export default Cards
