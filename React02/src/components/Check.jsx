import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function Check() {
  const data = ["Check 1", "Check 2", "Check 3", "Check 4"];
  let count = [];
  const handleChangeAll = (e) => {
    checkItemRef.current.forEach((el) => {
      el.checked = e.target.checked;
      if (count.length < data.length) {
        count.push(1);
      }
    });
    // if (e.target.checked) {
    //   count = [];
    // }
  };

  const handleCheckItem = (e) => {
    //cách 1
    // console.log(e.target.checked);

    if (count.length <= data.length) {
      if (e.target.checked) {
        count.push(1);
      } else {
        count.pop(1);
      }
    }
    if (count.length < data.length) {
      checkAllRef.current.checked = false;
    } else {
      checkAllRef.current.checked = true;
    }
    console.log(count);

    //cách 2
    // if (!e.target.checked) {
    //   checkAllRef.current.checked = false;
    //   return;
    // }
  };
  const checkAllRef = useRef();
  const checkItemRef = useRef([]);

  const getElementCheckbox = (el) => {
    if (data.length > checkItemRef.current.length) {
      checkItemRef.current.push(el);
    }
  };
  useEffect(() => {
    console.log(checkItemRef);
  });
  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            ref={checkAllRef}
            type="checkbox"
            onChange={(e) => {
              handleChangeAll(e);
            }}
          />
          Check All
        </label>
      </div>
      <hr />
      {data.map((item, index) => {
        return (
          <label style={{ display: "block" }} key={index}>
            <input
              type="checkbox"
              ref={getElementCheckbox}
              onChange={handleCheckItem}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
}
