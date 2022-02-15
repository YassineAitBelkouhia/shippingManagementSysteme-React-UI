import React, { useState, useRef } from "react";
import axios from "axios";

import Deliveries from "./Deliveries";
function App() {
  const [deliveries, setDeliveries] = useState([]);
  const emailRef = useRef();

  function handleAuth(e) {
    let email = emailRef.current.value;
    console.log(email);
    let deliveries;
    axios
      .post("http://localhost:5000/drivers/login", { email: email })
      .then((response) => {
        axios
          .get(`http://localhost:5000/drivers/${response.data._id}/deliveries`)
          .then((response) => {
            deliveries = response.data;
            setDeliveries(() => {
              return [...deliveries];
            });
            console.log(deliveries);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(response.data._id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          margin: "0",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          jusifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/images/polygon-scatter-haikei.svg')",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "40px",
            padding: "50px",
            fontFamily: "roboto",
            color: "whiteSmoke",
          }}
        >
          <Deliveries deliveries={deliveries} />
        </div>

        {deliveries.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              margin: "auto",
              width: "500px",
            }}
          >
            <label
              style={{
                fontFamily: "Roboto",
                fontSize: "30px",
                fontWeight: "500",
                color: "whiteSmoke",
              }}
              for="email"
            >
              Enter your email:
            </label>
            <input
              ref={emailRef}
              style={{
                height: "40px",
                borderRadius: "5px",
                border: "2px solid #4682b4",
                background: "none",
                color: "whiteSmoke",
                fontSize: "30px",
                padding: "5px 10px",
              }}
              type="email"
              name="email"
            />
            <button
              onClick={handleAuth}
              style={{
                width: "150px",
                margin: "auto",
                borderRadius: "5px",
                height: "50px",
                background: "#4682b4",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                fontFamily: "roboto",
              }}
            >
              Submit
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
