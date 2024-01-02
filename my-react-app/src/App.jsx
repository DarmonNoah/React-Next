/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile/profile";
import PropsExample from "./components/PropsExample/PropsExample";

function App() {

  const [name, setName] = useState("React");

  function onClickHandler(test) {
    setName("Vite");
    console.log("je proviens du composant enfant: ", test);

    setName((prev) => {
      return prev + "Vite";
    });
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Profile />

     <PropsExample name={name} childClickHandler={onClickHandler} />
    </>
  );
}

export default App;