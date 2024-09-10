import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, fetchEmail } from "../store/emailSlice";

export default function Email() {
  const data = useSelector((state) => state.email);
  // console.log("data", data);
  const { inputValue } = useSelector((state) => state.email);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchEmail(inputValue));
    console.log("vào đây");
  };
  const handleChange = (e) => {
    dispatch(changeInput(e.target.value));
  };
  return (
    <div>
      <h1>Email</h1>
      <input onChange={handleChange} type="email" />
      <h3>{inputValue}</h3>
      <button onClick={handleClick}>Get apiKey</button>
    </div>
  );
}
