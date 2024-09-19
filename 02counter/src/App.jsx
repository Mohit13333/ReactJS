import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let[counter,setCounter]=useState(5)
  // let counter=5
  let setCounter1=false;
  const addValue=() =>{
    // counter=counter+1
    setCounter(counter=>counter+1)
    // setCounter(counter=>counter+1)
    // setCounter(counter=>counter+1)
    // setCounter(counter=>counter+1)
  }
 const removeValue=() =>{
  counter=counter-1
  setCounter(counter)
  if(setCounter<0){
    setCounter.preventDefault(-1);
  }
 
 }
  return (
<>
    <h1>chai aur react</h1>
    <h2>counter value:{counter}</h2>

    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
