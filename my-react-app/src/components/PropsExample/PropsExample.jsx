import { useLayoutEffect, useState } from "react";
/* {[1, 2, 3, 4].map((item, i) => (
  <div key={item}>{item}</div>
))} */

export default function PropsExample({ name, childClickHandler }) {
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

      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Modifier informations
      </button>

      {visible && (
              <div>
              <input type="text" placeholder="Your first name" />
              <input type="text" placeholder="Your surname" />
              <input type="text" placeholder="Your email" />
              <input type="text" placeholder="Your adress" />
              <input type="text" placeholder="Your phone number" pattern="[0-9]{10}" />
              </div>
      )}
    </>
  );
}