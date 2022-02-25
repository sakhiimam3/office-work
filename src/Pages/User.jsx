import React, { useState, useEffect } from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
// import {useParams} from "react-router-dom"
import Card from "../Components/Card";
import CardData from "../Components/CardData.jsx";

const User = () => {
  const [show, setShow] = useState(false);
  const [btnName, setBtnName] = useState({
    value: "show card"
  })
  const [count, setCount] = useState(0);
  const showCard = () => {
    setShow(true);
    setCount(count + 1);
    setBtnName({
      value: "Hide Card"
    })
  };

  useEffect(() => {
    document.title = `${count}`;
  }, [count]);


  const HideCard = () => {
    setShow(false)
    window.confirm("Are you sure!")?
    setBtnName({
         value:"show card"
    }):
        setShow(true)
  }

  const Showing_Card = (val, index) => {
    return (
      <>
      <Col md={4}>
      <Card
          className=""
          imgsrc={val.imgsrc}
          key={index}
          UpperLine={val.title}
        />
      </Col>
        
      </>
    );
  };
  return (
    <>
      {
        <Container>
          <Row className="mt-5">
            {show ? CardData.map(Showing_Card) : null}
          </Row>
          <Button
            onClick={showCard}
            className="mt-5 text-capitalize"
            style={{ width: "200px" }}
            as="input"
            type="submit"
            value={btnName.value}
            onDoubleClick={HideCard}

          />
        </Container>
      }
    </>
  );
};

export default User;
