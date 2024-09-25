// import React from "react";

import Link from "next/link";

export default function page() {
  return (
    <div>
      <div>
        <Link href="/products?name=test">Products</Link>
      </div>
    </div>
  );
}
