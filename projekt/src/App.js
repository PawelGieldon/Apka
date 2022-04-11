import React from "react";
import "./style.css"
import Menu from "./components/Menu";
import { useState, useEffect } from "react";

function App(){
  
  const [gotData, setGotData] = useState({})
  const [count, setCount] = useState(1)
  const[oro, setOro] = useState([ "Pierwszy Napis", "Drugi Napis"])
  
  
  
  useEffect (() =>{
     console.log("Effect")
  fetch(`https://anapioficeandfire.com/api/characters/${count}`)
  .then(res => res.json())
  .then(data => setGotData(data))
},[count])
  
  function Skip(){
    setCount(count + 10)
  }

  function Next(){
    setCount(count +1)
  }
  
  function Back(){
    setCount(count - 10)
  }

  function prev(){
    setCount(count -1)
  }
 
  function big(){
    return <h2  className="option5">{oro.map((x)=>     
      <li key={x.toString()}>
        {x}
      </li>      
      )}</h2>
  }
  
   
  return(
    <div>
      
     <Menu oro={big} />
     <h2 className="option4">Character {count} from Game of Thrones </h2>
     <pre className="styled">{JSON.stringify(gotData, null, 2)}</pre>
     <button onClick={Next}>The Next Character</button>
     <button onClick={prev}>Previous</button>
     <button onClick={Skip}>Go Further</button>
     <button onClick={Back}>Back</button>
     
     
    </div>
  )
}




export default App;
