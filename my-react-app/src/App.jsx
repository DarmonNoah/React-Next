import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [name, setName]=useState("React")
console.log(name);

function onClickHandler(){
  name="isitech"
  console.log(name);
}

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">{name}</div>
        <button onClick={onClickHandler()}>click me ! </button>
    </>
  )
}

export default App
