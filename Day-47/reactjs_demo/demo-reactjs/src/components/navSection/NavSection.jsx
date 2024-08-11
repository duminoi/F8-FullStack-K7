// import React from "react";
import Button from "./Button";
import List from "./List";

export default function navSection() {
  return (
    <nav className="block py-4 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 w-full max-w-full rounded-none px-4 bg-white border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between  max-w-[1320px] lg:min-w-[960px]">
        <p className="block antialiased font-sans text-blue-gray-900 text-lg font-bold">
          Material Tailwind
        </p>
        <List></List>
        <Button />
      </div>
    </nav>
  );
}
