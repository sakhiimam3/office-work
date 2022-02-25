import React,{useContext} from 'react'
// import DynamicRouting from '../Components/DynamicRouting'
import { MainContex } from '../Components/UseContext'
const Contact = () => {
  const  bioData=useContext(MainContex)
  return (
    <div>
          {/* <h1>my name is {bioData.name}  address is {bioData.address}</h1> */}
          {/* <DynamicRouting /> */}
          
       
    </div>
  )
}

export default Contact
