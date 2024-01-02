import React from 'react';
import styles from "./Profile.module.css";
import { useState } from "react";
import PropsExample from "./../PropsExample/PropsExample";

function Profile() {

  const [name, setName] = useState("React");

  function onClickHandler(test) {
  }

  return (
    <>
    <PropsExample name={name} childClickHandler={onClickHandler} />
    </>
  )
}

export default Profile;