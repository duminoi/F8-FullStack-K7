// import React from "react";
import Login from "./components/Auth/Login";
import { useSelector } from "./store/hook";
import Profile from "./components/Auth/Profile";

export default function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  return <div>{Object.keys(auth.user).length ? <Profile /> : <Login />}</div>;
}

//Lấy dữ liệu từ form
//Call API login ==> lấy token ==> Lưu vào localStorage
//Dùng token để lấy thông tin profile
//Lưu toàn bộ thông tin profile lên store
//Dùng dữ liệu từ store để check và thay đổi hiển thị component
