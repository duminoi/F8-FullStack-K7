import React, { useEffect } from "react";

export default function Content() {
  useEffect(() => {
    console.log("mounting");
    return () => {
      console.log("unmounting");
    };
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
