import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Route }  from "react-router-dom"


const Layout = ({children}) => {
    return (
        <>
          <Header/>
            <main className='main-layout-section'>
                {children}
            </main>
          <Footer/>
        </>
    )
}


const LayoutRoute = ({component: Component, ...rest}) => {  
    return ( 
      <> 
      <Route {...rest} render={matchProps => (  
        <Layout>  
            <Component {...matchProps} />  
        </Layout>  
      )} />  
      </>
    )  
  };

export default LayoutRoute
