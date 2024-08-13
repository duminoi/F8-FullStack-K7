// import React from "react";
const para = `I'm Lily Smith, a passionate web developer based in USA. Here, you'll
        get a glimpse of my journey in the world of web development, where
        creativity meets functionality.`;
export default function Content() {
  return (
    <>
      <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mb-4 !text-gray-500 md:pr-16 xl:pr-28">
        {para}
      </p>
    </>
  );
}
