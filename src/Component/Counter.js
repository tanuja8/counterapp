// import { useState } from "react";
import React from 'react'
import  "./Home.css";
export default function Counter() {
    // const [counter,setCounter]=useState[0];
  return (
    <div>
      <div className="container">
        <div className='counter_app rounded'>
        <button type="button" class="btn btn-warning px-3 mx-3"> +</button>
        <button type="button" class="btn btn-warning px-3 mx-3 "> -</button>
        </div>
      </div>
    </div>
  )
}
