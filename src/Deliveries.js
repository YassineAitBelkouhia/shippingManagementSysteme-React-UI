import React from "react";
import Delivery from "./Delivery";

export default function Deliveries({ deliveries }) {
  return deliveries.map((delivery) => {
    return <Delivery key={delivery._id} delivery={delivery} />;
  });
}
