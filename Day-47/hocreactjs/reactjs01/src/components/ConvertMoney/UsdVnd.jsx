import React from "react";

export default function UsdVnd({ onChange, value }) {
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
