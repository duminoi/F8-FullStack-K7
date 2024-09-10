import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("cam-on", { state: { id: 1 } });
  };
  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Đặt hàng</button>
    </div>
  );
}
