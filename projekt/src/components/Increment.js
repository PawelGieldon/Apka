import { useState } from "react";
import React from "react";
import "./styling.css";



function Increment(){

 const [increments, setIncrements] = useState(0)

   const Increment = () =>{
       setIncrements(increments +1)
   } 

   const Decrement = () =>{
       setIncrements(increments -1)
   }

   const Ahead = () =>{
       setIncrements(increments +10)
   }
   const Back = () =>{
    setIncrements(increments -10)
}
   
   return  <div >
        <h1 className="buttons1">
            Licznik
        </h1>
        <div className="buttons">{increments}</div>
        <button onClick={Increment} className="buttons" onDoubleClick={Ahead}>+</button>
        <button onClick={Decrement} className="buttons" onDoubleClick={Back}>-</button>
        
    </div>
}

 

export default Increment;