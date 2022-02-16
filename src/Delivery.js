import React from "react";
import axios from "axios";

export default function Delivery({ delivery }) {
  function claimDelivery() {
    let driverId = localStorage.getItem("driver");
    axios
      .get(`http://localhost:5000/drivers/${driverId}/claim/${delivery._id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload(false);
      });
  }

  return (
    <div
      style={{
        padding: "20px 10px",
        width: "200px",
        background: "#4682b4",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        fontFamily: "roboto",
      }}
    >
      <h4>Description : {delivery.description}</h4>
      <h4>Destination</h4>
      <h4>Continent : {delivery.destination.continent}</h4>
      <h4>Country : {delivery.destination.country}</h4>
      <h4>Address : {delivery.destination.address}</h4>
      <h4>Weight : {delivery.weight}KG</h4>
      <button
        onClick={claimDelivery}
        style={{
          width: "100px",
          margin: "auto",
          borderRadius: "5px",
          border: "none",
          padding: "5px 10px",
          marginTop: "30px",
          cursor: "pointer",
        }}
      >
        Claim
      </button>
    </div>
  );
}
