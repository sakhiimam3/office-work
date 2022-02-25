import React,{forwardRef} from 'react'

const Fields = (props,ref) => {
  return (
         <input type="text"  ref={ref} />
  )
}

export default  forwardRef( Fields)