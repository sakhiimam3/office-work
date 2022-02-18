import React from 'react'

const Test = (props) => {

    const data={
          Name:"sakhidad",
          email:"sakhi@gmail.com"
    }
  return (
    <div>
         <button  onClick={()=>props.alert(data)}>Click me</button>
    </div>
  )
}

export default Test