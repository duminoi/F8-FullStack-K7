import React, { useEffect, useLayoutEffect, useState } from "react";

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      const status = localStorage.getItem("user_token");
      if (status) {
        setAuthenticated(true);
      }
    }, 1000);
  }, []);
  return (
    <div>
      <div>{isAuthenticated ? <h1>Profile</h1> : <h1>Login</h1>}</div>
    </div>
  );
}

//uselayoutEffect
/*
1. state thay đổi
2. component re-render
3. cleanup useLayoutEffect
4. callback useLayoutEffect
5. update UI (Khi callback chạy xong)
*/
