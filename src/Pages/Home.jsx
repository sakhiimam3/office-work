import React, { createContext} from "react";
// import CardData from "../Components/CardData.jsx";
// import Card from "../Components/Card";
import LoginForm from "../Components/LoginForm.jsx";
import Api from "../Components/Api.jsx";
import { Container, Row, Col } from "react-bootstrap";
const UserContex = createContext();
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

  let array = ["grapes", "mango", "banana"];

  return (
    <>
      <Container>
        <Row>
          <Col>
     
            <Api />
          </Col>
        </Row>
        <Row>
          <Col>
     
            <UserContex.Provider value={array}>
              <LoginForm />
            </UserContex.Provider>
          </Col>
        </Row>


      </Container>
     
          
  
            
    
          
          
         
     
    </>
  );
};

export default Home;

export { UserContex };
