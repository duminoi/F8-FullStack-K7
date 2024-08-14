import React from "react";

export default function VndUsd({ value, onChange }) {
  console.log(value);

  return (
    <div>
      <input
        type="number"
        placeholder="VND"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
