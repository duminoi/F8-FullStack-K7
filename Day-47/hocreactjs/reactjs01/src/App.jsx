import React, { useState } from "react";
import UsdVnd from "./components/ConvertMoney/UsdVnd";
import VndUsd from "./components/ConvertMoney/VndUsd";

export default function App() {
  const [usd, setUsd] = useState("");
  const [vnd, setVnd] = useState("");
  const handleChangeUsd = (e) => {
    const usd = e.target.value;
    setUsd(usd);
    setVnd(usd * 25000);
  };
  const handleChangeVnd = (e) => {
    const vnd = e.target.value;
    setVnd(vnd);
    setUsd(vnd / 25000);
  };
  return (
    <div>
      <UsdVnd onChange={handleChangeUsd} value={usd} />
      <VndUsd value={vnd} onChange={handleChangeVnd} />
    </div>
  );
}
