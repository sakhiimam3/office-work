import React, { useContext } from 'react'

const Footer = () => {
    const bioData=useContext(MainContex)
  return (
    <div>
        <h1 className='footer'>Footer {bioData.name}</h1>
    </div>
  )
}

export default Footer