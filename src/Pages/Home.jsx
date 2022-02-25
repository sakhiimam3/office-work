import React, { createContext } from "react";
// import CardData from "../Components/CardData.jsx";
// import Card from "../Components/Card";
import LoginForm from "../Components/LoginForm.jsx";
import Api from "../Components/Api.jsx";
import { Container, Row, Col } from "react-bootstrap";
import DefaultUser from "./DefaultUser.jsx";
export const UserContex = createContext();
const Home = () => {
  // const Showing_Card = (val) => {
  //   return (
  //     <>

  //     <Container>
  //            <Row>
  //              <Col sm>
  //              <Card imgsrc={val.imgsrc} key={val.id} UpperLine={val.title} />
  //         </Col>
  //       </Row>
  //     </Container>

  //     </>
  //   );
  // };


  return (
    <>
      <Container>
        <Row>
          <Col>
            <DefaultUser />
            <Api />
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
