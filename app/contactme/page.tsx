"use client";
import React from "react";

const ContactUs = () => {
  return (
    <main className="flex  justify-center w-full h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="w-full md:w-3/4 h-full  flex justify-center">
        <form
          method="post"
          action="https://getform.io/f/91e7b728-2b26-4a64-9664-b8907b6b6e77"
          className="w-3/4 flex flex-col h-full items-center justify-center"
        >
          <h1 className="font-bold text-center text-slate-700 dark:text-slate-100 text-3xl">
            Contact Me
          </h1>
          <input
            type="text"
            name="fullname"
            placeholder="Your Full Name "
            className="w-3/4  p-4 my-2 focus:outline-none dark:text-slate-900 font-mono text-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email "
            className="w-3/4  p-4 my-2 focus:outline-none dark:text-slate-900 font-mono text-xl"
            required
          />
          <textarea
            className="w-3/4 p-4 my-2 focus:outline-none dark:text-slate-900 font-mono text-xl"
            name="message"
            rows={5}
            placeholder="Write me what do you think ..."
            required
          ></textarea>
          <input
            type="submit"
            className="items-center p-4 mt-4 rounded-md block bg-blue-500 hover:bg-blue-600 text-white w-1/2 text-center"
            value="Submit"
          />
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
