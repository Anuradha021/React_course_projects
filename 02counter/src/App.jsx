
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'


function App() {

  let [counter,setCounter] = useState(15)
 //let counter = 5
 const addValue =()=>{


if(counter <=20){
setCounter(counter= counter+1 )
setCounter(counter= counter+1 )
setCounter(counter= counter+1 )
setCounter(counter= counter+1 )

 }
}
 const removeValue =()=>{
  if(counter >0){
  setCounter(counter-1)}
 }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>couter value:{counter}</h2>
     <button
     onClick={addValue}>add{counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >remove {counter}</button>
    </>
  )
}

export default App
