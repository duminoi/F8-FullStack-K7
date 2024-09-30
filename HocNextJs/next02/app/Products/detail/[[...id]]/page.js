import Link from "next/link";
import React from "react";

export default function ProductDetail({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>Product Detail: {id}</h1>
      {/* <Link href={"/Products/2/type"}>go to type</Link> */}
    </div>
  );
}
