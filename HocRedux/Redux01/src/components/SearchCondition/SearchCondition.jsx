// import React from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { onUpdateSearchInput, SEARCH_BY_PRIORITY } from "../../redux/action";
export default function SearchCondition() {
  const dispatch = useDispatch();
  const onInput = (e) => {
    dispatch(onUpdateSearchInput(e.target.value));
  };
  const handleClick = (e) => {
    dispatch({ type: SEARCH_BY_PRIORITY, payload: e.target.value });
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={onInput}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div className="radioContainer flex gap-3 mt-3">
          <input
            id="high"
            value={"high"}
            onClick={handleClick}
            name="priority"
            type="radio"
            // checked="checked"
          />
          <label htmlFor="high">high</label>

          <input
            onClick={handleClick}
            id="medium"
            value={"medium"}
            name="priority"
            type="radio"
          />
          <label htmlFor="medium">medium</label>

          <input
            onClick={handleClick}
            id="low"
            value={"low"}
            name="priority"
            type="radio"
          />
          <label htmlFor="low">low</label>
        </div>
      </div>
    </>
  );
}
