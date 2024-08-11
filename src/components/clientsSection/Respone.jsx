import React from "react";
import avatar1 from "../../assest/clientImg/avatar1.jpg";
import avatar2 from "../../assest/clientImg/avatar2.jpg";
import avatar3 from "../../assest/clientImg/avatar3.jpg";
import avatar4 from "../../assest/clientImg/avatar4.jpg";
export default function Respone() {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none py-8 lg:flex-row">
      <div className="p-6 w-full lg:gap-10 h-full lg:flex justify-between">
        <div className="w-full mb-10 lg:mb-0">
          <h3 className="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 mb-4 font-bold lg:max-w-xs">
            Mobile App Development
          </h3>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-3 w-full lg:w-8/12 font-normal text-gray-500">
            I had the pleasure of working with Lily on a critical web
            development project, and I can confidently say that their expertise
            and professionalism exceeded my expectations.
          </p>
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-0.5">
            Michael - Technical Manager
          </h6>
          <p className="block antialiased font-sans text-sm leading-normal text-inherit font-normal mb-5 text-gray-500">
            Marketing @ APPLE INC.
          </p>
          <div className="flex items-center gap-4">
            <img
              src={avatar1}
              alt="spotify"
              className="inline-block relative object-cover object-center w-9 h-9 rounded-md cursor-pointer opacity-50"
            />
            <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
            <img
              src={avatar2}
              alt="spotify"
              className="inline-block relative object-cover object-center w-9 h-9 rounded-md cursor-pointer opacity-50"
            />
            <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
            <img
              src={avatar3}
              alt="spotify"
              className="inline-block relative object-cover object-center w-9 h-9 rounded-md cursor-pointer opacity-100"
            />
          </div>
        </div>
        <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
          <img
            alt="testimonial image"
            loading="lazy"
            width="768"
            height="768"
            decoding="async"
            data-nimg="1"
            className="h-full rounded-lg w-full object-cover"
            src={avatar4}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}
