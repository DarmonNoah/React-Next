import React from 'react';
import styles from "./Profile.module.css";
import { useState } from "react";
import PropsExample from "./../PropsExample/PropsExample";

function Profile() {

    const [data, setData] = useState([
      {
        id : 1,
        name: "darm",
        surname: "noah",
        email: "noah.darm@isitech.fr",
        address: "222-6020 Enim. Av.",
        phone: "0101010101",
      }
    ]);
    

    const handleSubmit = (formData) => {
      setData([{id: 1, ...formData}])
  };

  return (
    <>
      {data.map((data) => (
      <>
        <div key={data.id}>
        
          <div>nom : {data.name}</div>
          <div>prénom : {data.surname}</div>
          <br/>
          <div>email : {data.email}</div>
          <div>adresse : {data.address}</div>
          <br/>
          <div>téléphone : {data.phone}</div>
          </div>
        <br />
      </>
      ))}

    <PropsExample data={data} childHandleSubmit={handleSubmit}/>
    </>
  )
}

export default Profile;