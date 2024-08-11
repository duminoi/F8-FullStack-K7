/* eslint-disable react/prop-types */
// import React from 'react'
export default function AppItem({ img }) {
  return (
    <>
      <img
        alt="coinbase"
        loading="lazy"
        width="768"
        height="768"
        decoding="async"
        className="w-40"
        src={img}
        style={{ color: "transparent" }}
      />
    </>
  );
}
