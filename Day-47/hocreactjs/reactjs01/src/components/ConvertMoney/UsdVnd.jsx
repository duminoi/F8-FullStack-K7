import React from "react";

export default function UsdVnd({ onChange, value }) {
  console.log(value);

  return (
    <div>
      <input
        type="number"
        placeholder="USD"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
