import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    userName:"Mohit Singh",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black400 rounded mb-4' >talwind test</h1>
     
     <Card channel="mohit singh" someObject={myObj} userName="mohit" btnText="visit me"/>

    </>
  )
}

export default App
