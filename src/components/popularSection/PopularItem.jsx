// import React from "react";

export default function PopularItem({ img }) {
  return (
    <>
      <img
        alt="coinbase"
        loading="lazy"
        width="480"
        height="480"
        decoding="async"
        data-nimg="1"
        className="w-40 grayscale opacity-75"
        src={img}
        style={{ color: "transparent" }}
      ></img>
    </>
  );
}
