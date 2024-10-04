import axios from "axios";
import React from "react";

export default async function CategoryPage() {
  const response = await axios.get("http://localhost:3001/categories");
  const categories = await response.data;
  console.log(categories);

  return (
    <div>
      <h1>Category</h1>
    </div>
  );
}
