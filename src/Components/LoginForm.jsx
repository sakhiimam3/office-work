import React, { useState,useContext,useEffect } from "react";
import {UserContex} from "../Pages/Home"
const LoginForm = () => {
  const [input ,setInput]=useState({
        name:"",
        email:"",
  })

  const [record,setRecord]=useState([])
  useEffect(()=>{
    console.log("input field")
   
},[input])


const InputHandler=(data)=>{
    let value = data.target.value;
    let name = data.target.name
    setInput({
        ...input,
        [name]: value,
      });
        
         
    }
const FormSumiision=(e)=>{
        e.preventDefault()
        
    const newrecord={...input, id: new Date().getTime().toLocaleString()}
    console.log(newrecord)

    setRecord([...record,newrecord])
      setInput({name:"",email:""})

}


  const fruits=useContext(UserContex)
  
 
  

  return (
      <>
            {fruits.map((arr)=>(
                 <h1>{arr}</h1>
            ))}
     <form onSubmit={FormSumiision}>
     <h1 className="text-center">Login form</h1>
     &nbsp;  
    <input type="text" name="name" value={input.name} onChange={InputHandler} placeholder="Name" /> 
   &nbsp;
   <input type="email" name="email" value={input.email} onChange={InputHandler} placeholder="Email" /> 
   &nbsp; <button className="btn btn-success"  type="submit">Submit</button>
    </form>

       
        {
            record.map((item)=>(
                
                <div>
                
                 <ul key={item.id}>
                   <li > Name  : {item.name}</li>
                   <li > Email : {item.email}</li>
                 </ul>
                 </div>
                 
                 
            ))
        }
 
    </>
  );
};

export default LoginForm;
