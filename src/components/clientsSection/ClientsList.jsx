// import React from 'react'

import Respone from "./Respone";

export default function ClientsList() {
  return (
    <section className='class="py-12 px-8 lg:py-24"'>
      <div className="container max-w-[1320px] lg:min-w-[960px] max-w-screen-lg mx-auto">
        <div className=" container mx-auto mb-20 text-center">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12">
            Discover what clients have to say about their experiences working
            with me. My client's satisfaction is my greatest achievement!
          </p>
        </div>
        <Respone />
      </div>
    </section>
  );
}
