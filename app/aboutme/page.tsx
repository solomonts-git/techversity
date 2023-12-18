import React from "react";
import cartoonme from "@/public/images/cartoonme.jpeg";
import me from "@/public/images/cartoonme.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <main className="w-full h-screen bg-slate-100 dark:bg-slate-950 text-black dark:text-slate-100 flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between w-3/4  ">
        <div className="flex w-full justify-center items-center mx-4">
          <Image
            src={me}
            alt="Cartoon me"
            className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover"
          />
        </div>
        <div className="mx-4 py-5">
          <h1 className="font-bold  text-2xl mb-2">
            Hello, I&rsquo;m Solomon Tsegaye
          </h1>
          <h2 className="font-semibold text-xl mb-2">
            Lecturer and Web Developer
          </h2>
          <p className="font-mono font-thin mb-2">
            I like to develop modern web sites using modern technologies such as
            ReactJs , NextJS
          </p>
          <p>
            <span className="font-semibold font-serif italic">
              Write me message
            </span>
            <Link
              href="/contactme"
              className="bg-blue-400 p-4 my-2 block w-1/2 text-center rounded-md cursor-pointer hover:bg-blue-500 "
            >
              Contact Me
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
