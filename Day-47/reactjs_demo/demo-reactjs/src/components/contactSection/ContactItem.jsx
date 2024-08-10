// import React from "react";

export default function ContactItem({ icon, content }) {
  return (
    <>
      <div className="flex gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6 text-white"
        >
          <path fillRule="evenodd" d={icon} clipRule="evenodd"></path>
        </svg>
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white mb-2">
          {content}
        </h6>
      </div>
    </>
  );
}
