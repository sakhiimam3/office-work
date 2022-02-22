import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
   const Increase=()=>{
          setCount(count + 1)
   }
   const Decrease=()=>{
    setCount(count - 1)
    if(count < 1){
        setCount(0)
          alert("not allowed")
    }
  }
   
  

  return (
    <>
    <div className="counter-app">
      <button onClick={Increase} className="btn btn-success">Increase</button>
       <span>{count}</span> 
    
      <button  onClick={Decrease} className="btn btn-danger">Decrease</button>
      </div>
    </>
  )
};

export default Counter;
