"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import campus from "@/public/images/campus.jpeg";
import campus1 from "@/public/images/campus1.jpeg";
import student from "@/public/images/student.jpeg";
import student1 from "@/public/images/student1.jpeg";
import JS from "@/public/images/javascript.png";
import Rect from "@/public/images/React-icon.png";
import Tailwind from "@/public/images/Tailwind_CSS.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import DarkMode from "./components/DarkMode";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (): void => {
    document.getElementById("disclamir")!.style.display = "none";
  };

  return (
    <main className="flex justify-center w-full md:my-2 md:rounded-md relative">
      {isClient ? <DarkMode /> : null}
      <div className="w-full md:w-3/4   flex flex-col items-start justify-start">
        <div className="w-full bg-slate-100 dark:bg-slate-900 mb-1 border-b-2 border-slate-500 h-24 flex text-slate-950 dark:text-slate-100 items-center justify-between">
          <span className="ml-10 font-semibold  font-mono text-3xl">
            Techversity
          </span>
          <div className="mr-10 flex justify-between">
            <Link
              href="/login"
              className="border-t-4 border-t-slate-100 dark:border-t-slate-900 hover:border-t-4 hover:border-t-yellow-400"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="border-t-4 border-t-slate-100 dark:border-t-slate-900 hover:border-t-4 hover:border-t-yellow-400 ml-4"
            >
              Signup
            </Link>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="flex justify-center items-center w-full h-[500px] py-4"
        >
          <SwiperSlide>
            <Image
              src={campus}
              alt="campus"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={campus1}
              alt="campus"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={student}
              alt="student"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={student1}
              alt="student"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div className="w-full  flex flex-col  justify-between">
          <div className="w-full flex flex-col md:flex-row justify-between ">
            <div className="w-full md:w-1/2 bg-slate-100 dark:bg-slate-900 dark:text-slate-100 py-10 px-4 mt-2 rounded-md">
              <h1 className="text-2xl py-2 font-bold font-mono">
                Programs offered in Techversity
              </h1>
              <ul className="px-4">
                <li>
                  <span className="font-bold font-mono">
                    Faculty of Informatics
                  </span>
                  <ul className="list-inside list-disc px-4">
                    <li>Computer Science</li>
                    <li>Information Science</li>
                    <li>Information Technology</li>
                    <li>Software Engineering</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold font-mono">
                    Faculty of Electrical and Computer Engineering
                  </span>
                  <ul className="list-inside list-disc px-4">
                    <li>Communication Engineering</li>
                    <li>Computer Engineering</li>
                    <li>Control Engineering</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 py-10 px-4 bg-slate-100 dark:bg-slate-900 dark:text-slate-100 border-l-2  md:border-l-slate-300  mt-2 rounded-md">
              <h1 className="text-2xl py-2 font-bold font-mono">
                Program modalities in Techversity
              </h1>
              <ul className="px-4">
                <li>
                  <span className="font-bold font-mono">
                    Faculty of Informatics
                  </span>
                  <ul className="list-inside list-disc px-4">
                    <li>Regular Monday - Friday</li>
                    <li>weekends Satrday - Sunday</li>
                    <li>Night Monday - Friday</li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold font-mono">
                    Faculty of Electrical and Computer Engineering
                  </span>
                  <ul className="list-inside list-disc px-4">
                    <li>Regular Monday - Friday</li>
                    <li>weekends Satrday - Sunday</li>
                    <li>Night Monday - Friday</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full  bg-slate-100  dark:bg-slate-900 dark:text-slate-100 flex flex-col  p-4 mt-2">
            <h1 className="text-2xl font-semibold font-mono underline-offset-1">
              Available Certificate Short term Courses
            </h1>
            <div className=" flex flex-col md:flex-row justify-center items-center p-4">
              <div className="w-full md:w-1/3 m-3">
                <div className="card hover:scale-105 ease-in">
                  <figure>
                    <Image src={JS} alt="JavaScript" className="w-full h-40" />
                  </figure>
                  <div className="card-body text-slate-950">
                    <h2 className="card-title">JavaScript!</h2>
                    <p className="p-2 ">
                      Programming language used for Web, Mobile app development
                    </p>
                    <div className="w-full flex justify-end">
                      <button className="bg-blue-300 hover:bg-blue-400 text-white p-3 rounded-md m-3">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 m-3">
                <div className="card hover:scale-105 ease-in">
                  <figure>
                    <Image
                      src={Tailwind}
                      alt="Tailwind"
                      className="w-full h-40"
                    />
                  </figure>
                  <div className="card-body text-slate-950">
                    <h2 className="card-title">Tailwind</h2>
                    <p className="p-2">
                      CSS utility class easy to use, flexible
                    </p>
                    <div className="w-full flex justify-end">
                      <button className="bg-blue-300 hover:bg-blue-400 text-white p-3 cursor-pointer rounded-md m-3">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 m-3">
                <div className="card hover:scale-105 ease-in">
                  <figure>
                    <Image src={Rect} alt="React Js" className="w-full h-40" />
                  </figure>
                  <div className="card-body text-slate-950">
                    <h2 className="card-title">ReactJs</h2>
                    <p className="p-2">
                      JavaScript Library used for web and mobile app
                      developmet...
                    </p>
                    <div className="w-full flex justify-end">
                      <button className="bg-blue-300 hover:bg-blue-400 text-white p-3 cursor-pointer rounded-md m-3">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between bg-slate-100 dark:bg-slate-900 mb-2 dark:text-slate-100 mt-2 p-4">
            <div className="w-full">
              <h1 className="text-2xl font-semibold font-mono py-2">
                Featured Events
              </h1>
              <div>
                <h2 className="text-xl font-semibold py-2">Tech Challenge</h2>
                <p className="py-2">
                  <span className="font-semibold">October 20</span> Techversity
                  host technology challenge acros the continent.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold py-2">Sport Challenge</h2>
                <p className="py-2">
                  <span className="font-semibold">November 28</span> Techversity
                  host technology challenge at main campus.
                </p>
              </div>
            </div>
            <div className="w-full ml-2">
              <Image
                src={student}
                alt="Student"
                className="w-full rounded-md"
              />
            </div>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-900 text-center text-slate-900 dark:text-slate-100 py-8 flex flex-col">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="w-full flex flex-col text-white justify-start">
                <h1 className="font-bold text-slate-900  dark:text-slate-100 font-mono text-3xl py-2">
                  Techversity Tech University
                </h1>
                <p className="py-2 text-slate-900  dark:text-slate-100">
                  202 Fictional Planet, Mars 98000
                </p>
                <h1 className="font-semibold py-2 text-slate-900  dark:text-slate-100">
                  STAY CONNECTED
                </h1>
                <div className="flex justify-center mt-2">
                  <span className="text-2xl mx-2 rounded-md bg-blue-500 hover:bg-blue-700">
                    <Link href="https://www.facebook.com/solomonts2023">
                      <FaFacebookF />
                    </Link>
                  </span>
                  <span className="text-2xl  rounded-md mx-2 bg-red-500 hover:bg-red-700">
                    <Link href="https://twitter.com/solomontseth">
                      <FaXTwitter />
                    </Link>
                  </span>
                  <span className="text-2xl  rounded-md mx-2 bg-gray-500 hover:bg-gray-700">
                    <Link href="https://github.com/solomonts-git">
                      <AiFillGithub />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="w-full  text-white">
                <ul className="py-2">
                  <li className="font-mono font-bold text-xl text-slate-900  dark:text-slate-100">
                    Important Links
                  </li>
                  <li className="pb-2  text-slate-900  dark:text-slate-100">
                    <Link href="/contactme" className="cursor-pointer">
                      Contact Me
                    </Link>
                  </li>
                  <li className="pb-2 text-slate-900  dark:text-slate-100">
                    <Link href="/aboutme" className="cursor-pointer">
                      About Me
                    </Link>
                  </li>
                  <li className="pb-2 text-slate-900  dark:text-slate-100">
                    <Link href="/login" className="cursor-pointer">
                      Login
                    </Link>
                  </li>
                  <li className="pb-2 text-slate-900  dark:text-slate-100">
                    <Link href="/signup" className="cursor-pointer">
                      Signup
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between text-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2799.9165062721586!2d38.50019664065281!3d7.046851160224728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sam!2set!4v1696432331081!5m2!1sam!2set"
                  style={{ height: "280px" }}
                  className="w-full mx-3 rounded-md"
                ></iframe>
              </div>
            </div>

            <div className="w-full mt-3 pt-3 border-t-slate-500 border-t-2">
              <p className="font-mono font-thin text-slate-900  dark:text-slate-100">
                &copy;{new Date().getFullYear()} Techversity Tech University
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bottom-0 left-0 w-72 h-44 bg-slate-300 dark:bg-black flex flex-col justify-center fixed z-20"
        id="disclamir"
      >
        <h1 className="text-2xl font-semibold mx-2 text-slate-900  dark:text-slate-100 text-center">
          Disclameir
        </h1>
        <p className="text-xs mx-2 p-2 text-justify  text-slate-900  dark:text-slate-100">
          This website collect signup and login information temporarily in your
          borwser localstorage. the storage will be cleared after you logout!!
        </p>
        <button
          className="p-2 bg-blue-600 m-2 rounded-lg w-fit"
          onClick={handleClick}
        >
          Accept
        </button>
      </div>
    </main>
  );
}
