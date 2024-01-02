import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Profile from './components/profile';

function App() {
  const [name, setName]=useState("React")
 // console.log(name);

function onClickHandler(){
  setName("Vite");

  setName((prev)=>{return prev + "vite";})
}

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">{name}</div>
        <button onClick={onClickHandler}>click me ! </button>
        <Profile/>
    </>
  )
}

export default App
