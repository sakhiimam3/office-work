import React from 'react'
import {
   
    Switch,

    
  } from "react-router-dom";

import Home from '../Pages/Home'; 
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import LayoutRoute from './LayoutRoute.jsx';

  
const Routing = () => {
    
   
  
  return (
      

     <Switch>
           <LayoutRoute exact  path="/"   component={Home}/>
           <LayoutRoute  path="/About"   component={About}/>
           <LayoutRoute  path="/Contact"   component={Contact}/>

     </Switch>
     
  )
}

 export default Routing


