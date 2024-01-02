import React from 'react';
import styles from "./Profile.module.css";
import { useState } from "react";
import PropsExample from "./../PropsExample/PropsExample";

function Profile() {

  const [name, setName] = useState("React");

  function onClickHandler(test) {
  }
    const data = [
      {
        id : 1,
        name: "darm",
        surname: "noah",
        email: "noah.darm@isitech.fr",
        address: "222-6020 Enim. Av.",
        phone: "0101010101",
      }
    ];

  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
      {data.map((item) => (
      <>
        <div key={item.id}>
        
          <div>nom : {item.name}</div>
          <div>prénom : {item.surname}</div>
          <br/>
          <div>email : {item.email}</div>
          <div>adresse : {item.address}</div>
          <br/>
          <div>téléphone : {item.phone}</div>
          </div>
        <br />
      </>
      ))}
      </div>
    <PropsExample name={name} childClickHandler={onClickHandler} />
    </>
  )
}

export default Profile;