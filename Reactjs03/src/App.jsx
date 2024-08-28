// import React from "react";
import Login from "./components/Auth/Login";

export default function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

//Lấy dữ liệu từ form
//Call API login ==> lấy token ==> Lưu vào localStorage
//Dùng token để lấy thông tin profile
//Lưu toàn bộ thông tin profile lên store
//Dùng dữ liệu từ store để check và thay đổi hiển thị component
