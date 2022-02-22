import { createContext } from "react";
const MainContex = createContext();

const DataProvider=(props)=>{
      const data={
            name:"sakhi",
            address:"sharafi"
      }
   return(
            <MainContex.Provider value={data}>
                {props.children}
            </MainContex.Provider> 
   )
}


export default DataProvider;
export {
      MainContex
}