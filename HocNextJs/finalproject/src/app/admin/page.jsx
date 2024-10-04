import Link from "next/link";
import React from "react";

export default function admin() {
  return (
    <div>
      <Link href={"/admin/product"}>Product</Link>
      <Link href={"/admin/category"}>Category</Link>
    </div>
  );
}
