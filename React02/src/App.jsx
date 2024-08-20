// import React from "react";

import { createContext, useState } from "react";
import Content from "./components/Content";
export const AppContext = createContext();
// console.log(AppContext);

export default function App() {
  const [message, setMessage] = useState("Học React không khó");
  const handleClick = () => {
    console.log("ok chưa");
    setMessage("Học React rất khó");
  };
  return (
    <AppContext.Provider
      value={{
        msg: message,
        onclick: handleClick,
      }}
    >
      <Content />
    </AppContext.Provider>
  );
}

//A => B => C => D
//Context
/*
- Khởi tạo đối tượng Context ==> Dùng hàm CreateContext
- Bọc Component Provider (Của Context)
- Lấy dữ liệu từ Context: Dùng component Consumer hoặc hook useContext
*/
