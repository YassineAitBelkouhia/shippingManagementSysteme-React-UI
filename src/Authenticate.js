import React from "react";

export default function Authenticate() {
  return (
    <>
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
          style={{
            height: "40px",
            borderRadius: "5px",
            border: "2px solid whiteSmoke",
            background: "none",
            color: "whiteSmoke",
            fontSize: "30px",
            padding: "5px 10px",
          }}
          type="email"
          name="email"
        />
        <input
          style={{
            width: "200px",
            margin: "auto",
            borderRadius: "5px",
            height: "50px",
            background: "#4682b4",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
          name="submit"
        />
      </div>
    </>
  );
}
