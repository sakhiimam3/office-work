import React,{useState,useEffect, useCallback} from 'react'
import { Container } from 'react-bootstrap'

const DefaultUser = () => {
       const [number,setNumber]=useState({num1:0,num2:0})
       const [result,setResult]=useState(0)
       useEffect(()=>{
             console.log(number)
       },[number,result])

       const addNumber=useCallback(()=>{
               setResult(number.num1 + number.num2)
               console.log(result)
       },[number,result])
  
  
return (
    <div> 
          <>
          <Container>
         <h1>Result is :{result}</h1>
         <input type="text" onChange={(e)=>setNumber({num1:+e.target.value,num2:number.num2})}  className='mt-3'/> <br />
         <input type="text" onChange={(e)=>setNumber({num1:number.num1,num2:+e.target.value})}  className='mt-3'/> <br />
         <button onClick={addNumber} className='btn btn-success mt-3'>Change</button>
         </Container>
         </>

      </div>
  )
}
export default DefaultUser