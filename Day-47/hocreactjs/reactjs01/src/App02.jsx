// import React from "react";

import Form from "./components/Form";
import Counter from "./components/Counter";
export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

/*
State:
- Thay dổi dữ liệu trong nội bộ component
- Khi State thay đổi ==> Component sẽ bị Re-render(Gọi lại)
- Không được thay đổi trực tiếp state mà phải thông qua hàm setState

Trong Functional Component ==> Chỉ làm việc được với JSX, Props

Nếu muốn làm việc với State, Lifecycle, ... =>
    Sử dụng React Hook (Phiên bản 16.8 trở lên) 

Hook là gì?
- Hàm đặc biệt cho phép Functional Copmonent dử dụng các tính năng của ReactJs
- Bắt đầu bằng từ khóa use
- Chỉ sử dụng được trong Funcional Component
- Cho phép lập trình viên tư định nghĩa Hook
*/
