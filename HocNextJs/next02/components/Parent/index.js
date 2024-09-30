import React from "react";
import { Child } from "@/components";

export default function Parent({ name }) {
  console.log("parent");
  console.log("name", name);

  return (
    <div>
      <span>parent</span>
      <Child />
    </div>
  );
}
