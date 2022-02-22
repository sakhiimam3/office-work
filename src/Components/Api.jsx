import React,{useState,useEffect} from "react";
import axios from "axios";

const Api = () => {
      const [num,setNum]=useState()
      const [name,setName]=useState()
      const [total,SetTotal]=useState()
      useEffect(()=>{
        async function getData(){
             const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            
             setName(res.data.name)
             SetTotal(res.data.moves.length)
        }
          getData()
      })

  return (
    <> 
       <h1>You choose 👍 {num}</h1>
        <h2>Pockmen Name is 💯 {name}</h2>
        <h1>Total moves : {total}</h1>
      <select value={num} onChange={(e)=>setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="26">26</option>

      </select>
    </>
  );
};

export default Api;
