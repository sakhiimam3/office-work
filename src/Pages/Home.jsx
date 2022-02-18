import React from "react";
import CardData from "../Components/CardData.jsx";
import Card from "../Components/Card";
import Counter from "../Components/Counter.jsx";

const Home = () => {

  const Showing_Card = (val) => {
    return (
      <>
        <Card imgsrc={val.imgsrc}  key={val.id}  UpperLine={val.title} /> 
        
      </>
    );
  };


  // function Greeting(greet){
  //       alert(greet.email)
  // }

  return (
      <>
             <Counter />
       <div className="responsiveCard">{CardData.map(Showing_Card)}</div> 
        
   
       
   
      </>
  )
}

export default Home;
