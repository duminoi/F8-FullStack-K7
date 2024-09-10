// import React from "react";
import { memo } from "react";
export default memo(function Content() {
  console.log("2.Content render");
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore in,
        beatae nulla asperiores ducimus blanditiis iusto iure assumenda
        accusantium ullam esse deserunt sapiente rem. Magnam facere quibusdam
        aliquid fuga numquam.
      </p>
    </div>
  );
});
