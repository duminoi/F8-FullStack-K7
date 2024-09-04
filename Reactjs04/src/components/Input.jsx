// import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
export default forwardRef(function Input(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      set value(val) {
        inputRef.current.value = val;
      },

      get value() {
        return inputRef.current.value;
      },

      set placeholder(val) {
        inputRef.current.placeholder = val;
      },
      get placeholder() {
        return inputRef.current.placeholder;
      },
    };
  });

  return <input placeholder="Enter your name" ref={inputRef} type="text" />;
});
