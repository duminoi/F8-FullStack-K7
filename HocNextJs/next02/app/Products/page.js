import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <div>
      <p>Products</p>
      <Link href={"/Products/detail/"}>go to details</Link>
    </div>
  );
}
