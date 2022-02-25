import React,{useContext} from 'react'
import { MainContex } from "../Components/UseContext"
import Update from "../Components/Update"

const About = () => {
  const gettingData=useContext(MainContex)
  return (
  <div> 
      <Update />
       <h1>Using of use context hook here</h1>
      <h2>  my name is {gettingData.name} and address is {gettingData.address}</h2> 
  </div>
  )
}

export default About