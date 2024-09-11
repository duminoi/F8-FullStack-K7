import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onUpdateSearchInput } from "../../redux/action";
export default function SearchCondition() {
  console.log("vào search");
  // const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const onInput = (e) => {
    dispatch(onUpdateSearchInput(e.target.value));
  };
  return (
    <>
      <input
        type="text"
        placeholder="search"
        onChange={onInput}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </>
  );
}
