// import React from "react";

import { useMemo, useState } from "react";
import color from "./utils/Color";
function App() {
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState("");
  const handleChangeValue = (e) => {
    setAmount(e.target.value);
    console.log();
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    console.log(history);
    setHistory([...history, amount]);
  };
  const total = useMemo(() => {
    return history.reduce((total, history) => {
      console.log("reduce");
      return total + +history;
    }, 0);
  }, [history]);

  return (
    <div>
      <form onSubmit={handleTransfer} action="">
        <input
          value={amount}
          onChange={handleChangeValue}
          type="number"
          placeholder="Số tiền cần chuyển..."
        />
        <button>Chuyển</button>
      </form>
      <h2>Lịch sử chuyển tiền</h2>
      {history.map((history, index) => {
        return (
          <h4 key={index}>
            lần {index + 1}: {history}
          </h4>
        );
      })}
      <h1>Tổng tiền: {total}</h1>
    </div>
  );
}

const ColoredApp = color(App); // Give a name to the exported component

export default ColoredApp;
//Xây dựng Higher Order Component
/*
    Tạo ra một hàm bọc một component và trả về chính component đó sau khi đã được thay đổi logic
  useId
  useTransition
  useDeferredValue
    */
