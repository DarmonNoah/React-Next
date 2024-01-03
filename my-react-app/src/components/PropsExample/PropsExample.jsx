import React, { useLayoutEffect, useState } from "react";

export default function PropsExample({ name, surname, email, address, phone }) {

  const [formData, setFormData] = useState({name: name,surname: surname,email: email,address: address, phone: phone});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value, [surname]: value, [email]: value, [address]: value, [phone]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`name : ${formData.name}, surname : ${formData.surname}, email : ${formData.email}, address : ${formData.address}, phone : ${formData.phone}`
    );
    setVisible(!visible);
};

  const [visible, setVisible] = useState(false);
  return (
    <>

      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Modifier informations
      </button>

      {visible && (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Nom:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

    <label htmlFor="surname">Prénom:</label>
    <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange}/>

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

    <label htmlFor="address">Adresse:</label>
    <input id="address" name="address" value={formData.address} onChange={handleChange}/>

    <label htmlFor="phone">Téléphone:</label>
    <input id="phone" name="phone" value={formData.phone} onChange={handleChange}/>

    <button type="submit">Enregistrer</button>

  </form>
    )}
    </>
  );
}
