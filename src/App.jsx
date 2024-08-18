import { useState } from 'react'
import './App.css'


export default function App() {
  
const [content, setContent] = useState({})
const [value, setValue] = useState('')
const [math, setMath] = useState(Math.floor(Math.random()*100))
console.log(math);

function showValue(event){
  let inValue = event.target.value
  console.log(event.target.value)
  if(inValue==math){
   setContent({background: "green"})
  }else{
    setContent({background: "red"})
    
  }
  setValue(inValue) 
}
function Text(){
          if(value > math){
            return "Too high"
          }else if(value == math){
            return "Correct"
          }
          else{
            return "Too low"
          }
        }
  return (
    <>
   
      <div className="container">
        <input maxLength='3' style={content} pattern="[0-9]{3}" type="number" onChange={showValue}></input>
        <div className="text">
          {value === "" ? "" : Text()}
        </div>
      </div>
    </>
  )
}


