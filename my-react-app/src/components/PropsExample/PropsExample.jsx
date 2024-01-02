import { useLayoutEffect, useState } from "react";
/* {[1, 2, 3, 4].map((item, i) => (
  <div key={item}>{item}</div>
))} */

export default function PropsExample({ name, childClickHandler }) {


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