import { forwardRef } from "react";

const Button = (props, ref) => {
  return <button ref={ref}>Click me</button>;
};
export default forwardRef(Button);
//Higher Order Component
