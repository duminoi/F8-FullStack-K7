// import React from "react";
import { contactData } from "../../data/contactSection/contactData";
import ContactItem from "./ContactItem";
export default function ContactInfo() {
  return (
    <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white mb-2">
        Contact Information
      </h4>
      <p className="block antialiased font-sans font-normal text-inherit mx-auto mb-8 text-base !text-gray-500">
        Fill up the form and our Team will get back to you within 24 hours.
      </p>
      {contactData.map((item, id) => (
        <ContactItem key={id} {...item}></ContactItem>
      ))}
    </div>
  );
}
