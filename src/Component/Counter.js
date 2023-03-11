import { useState } from "react";
import React from 'react'
import  "./Home.css";
export default function Counter() {
    const [counter,setCounter]=useState(0);
    // function sub(){
    //     if(counter>=0){
    //       setCounter=counter+1;
    //     }
    // }
  return (
    <div>
      <div className="container">
        <div className='counter_app rounded'>
        <button type="button" class="btn btn-danger px-3 mx-3" onClick={()=>setCounter(counter+1)}> +</button>
        <h4 className='text-primary '>{counter}</h4>
      <button type="button" class="btn btn-danger px-3 mx-3 " onClick={()=>setCounter(counter >0 ? counter-1 :"0")}> -</button>
        </div>
      </div>
    </div>
  )
}
