// import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactBot() {
  return (
    <div>
      <div className="relative max-w-[1320px] lg:min-w-[960px] flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md container mx-auto border border-gray/50">
        <div className="p-6 grid grid-cols-1 lg:grid-cols-7 md:gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
