import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input ,setInput]=useState({
        name:"",
        email:"",
  })
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

const InputHandler=(data)=>{
    let value = data.target.value;
    setInput({
        ...input,
        [data.target.name]: value,
        [data.target.email]: value
        


      });
        
         
    }

   
  

  return (
    <div className="counter-app">
      <button onClick={Increase} className="btn btn-success">Increase</button>
       <span>{count}</span> 
    
      <button  onClick={Decrease} className="btn btn-danger">Decrease</button>



     <form>
     &nbsp;  
    <input type="text" name="name" value={input.name} onChange={InputHandler} placeholder="Name" /> 
   &nbsp;  
   <input type="email" name="email" value={input.email} onChange={InputHandler} placeholder="Email" /> 

    </form>
 
 <div className="render_inputs">
  Name:  {input.name} &nbsp; email :  {input.email}
 </div>
    </div>
  );
};

export default Counter;
