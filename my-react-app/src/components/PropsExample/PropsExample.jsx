import { useLayoutEffect, useState } from "react";
/* {[1, 2, 3, 4].map((item, i) => (
  <div key={item}>{item}</div>
))} */

export default function PropsExample({ name, childClickHandler }) {
  const data = [
    {
      id : 1,
      name: "bbb",
      surname: "ppp",
      email: "b.p.sodales@hotmail.ca",
      adresse: "222-6020 Enim. Av.",
      phone: "0101010101",
    }
  ];

  const [visible, setVisible] = useState(true);
  return (
    <>
      <ul>
      {data.map((item) => (
      <>
        <li key={item.id}>
          <div>{item.name}</div>
          <div>{item.surname}</div>
          <div>{item.email}</div>
          <div>{item.address}</div>
          <div>{item.phone}</div>
        </li>
        <br />
      </>
      ))}
      </ul>

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