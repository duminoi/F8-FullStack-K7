/* eslint-disable react/prop-types */
// import React from 'react'

export default function ResumItem({ icon, content }) {
  return (
    <>
      <div className="flex items-start gap-4">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-900 text-white shadow-gray-900/20 shadow-md h-12 w-12 shrink-0 items-center justify-center !rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
            strokeWidth="2"
          >
            <path d={icon}></path>
          </svg>
        </div>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit w-full font-normal !text-gray-500">
          {content}
        </p>
      </div>
    </>
  );
}
