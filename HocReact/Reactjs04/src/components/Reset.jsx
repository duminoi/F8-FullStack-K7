/* eslint-disable react/prop-types */
// import React from "react";

import { memo } from "react";

export default memo(function Reset({ reset }) {
  //   console.log("Reset render");
  return (
    <div>
      <button onClick={reset}>Reset count</button>
    </div>
  );
});
