import React from "react";
import { useState } from "react";
import Increment from "./Increment";



function Menu(props){
  
  const [showIncrement, setShowIncrement] = useState(false)
  const [button, setButton] = useState(false)
  const [writing, setWriting] = useState('')
  
  
  
  const handleClick = () =>{
    setShowIncrement(showIncrement => !showIncrement); 
  }

  
  
  const input=()=>{
    console.log("Hello")   
     
    return <button  onClick={() => <h1>{setWriting(props.oro)}</h1>} >Dodaj napis</button>
    
  }
      
  const handleClick1 = () =>{
    setButton(button => !button); 
  }
  
  return(
    <div>
      <div id="container">

        <div id="menu">
          <div><h1>{props.oroo}</h1></div>                                            
          <div className="option" onClick={handleClick}>Pokaż/Ukryj licznik</div>
          <div className="option" onClick={handleClick1}>Pokaż/Ukryj buttona</div>    
          <div>{showIncrement ? <Increment/>:''}</div>
          <div>{button ?input() :''}</div>
          {button}
          {writing}
          
          
          
          
          
        </div>

      </div>
    </div>
  )
}

export default Menu;