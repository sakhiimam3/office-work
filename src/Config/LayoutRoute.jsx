import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet}  from "react-router-dom"


const Layout = () => {
    return (
        <> 
          <Header/>
          {/* <Footer/> */}

        </>
    )
}


const LayoutRoute = () => {  
    return ( 
      <> 
      <div className='main'>
      <Layout>
        <Outlet/>
      </Layout>
      </div> 
      </>
    )  
  };

export default LayoutRoute
