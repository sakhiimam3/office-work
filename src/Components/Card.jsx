import React from 'react'
import {Card} from "react-bootstrap"
const Cards = (props) => {

  function Greeting(){
      
  }
  return (
    
    <Card style={{ width: '18rem' ,height:"2rem" }}>
    <Card.Img variant="top"  src={props.imgsrc} />
    <Card.Body>
      <Card.Title>{props.UpperLine}</Card.Title>
      
    </Card.Body>
  </Card>

  )
}    

export default Cards
