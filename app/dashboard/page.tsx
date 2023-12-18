"use client";
import React, { useEffect, useState } from "react";
import AddCourse from "../components/AddCourse";
import AddDepartment from "../components/AddDepartment";
import EnrollStudent from "../components/EnrollStudent";
import RegisterStudent from "../components/RegisterStudent";
import LandingPage from "../components/LandingPage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ViewCourses from "../components/ViewCourses";
import ViewDepartments from "../components/ViewDepartments";
import ViewRegisteredStudents from "../components/ViewRegisteredStudents";

import { FaBars } from "react-icons/fa";
import DarkMode from "../components/DarkMode";
type authDetailType = {
  firstName: string;
  lastName: string;
  email: string;
};

const Dashboard = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(<LandingPage />);
  const [showSideBar, setShowSideBar] = useState(false);
  const [firstName, setFirstName] = useState("Guest");
  const [lastName, setLastName] = useState("Guest");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    async function Hello() {
      const auth: authDetailType | null = await JSON.parse(
        localStorage.getItem("Auth") as string
      );
      if (!auth) {
        router.push("/");
      } else {
        setFirstName(auth.firstName);
        setLastName(auth.lastName);
      }
    }
    Hello();
  }, []);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
    if (showSideBar) {
      document.getElementById("sidebar")!.classList.remove("hidden");
      document.getElementById("maincontent")!.classList.add("hidden");
    } else {
      document.getElementById("sidebar")!.classList.add("hidden");
      document.getElementById("maincontent")!.classList.remove("hidden");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-between bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative">
      <div
        id="sidebar"
        className="hidden md:flex flex-col  w-full md:w-1/4 min-h-screen "
      >
        <div className="w-full h-20 flex justify-between md:justify-center items-center">
          <div className="ml-4 ">
            <button
              className="bg-slate-100 dark:bg-slate-950  rounded-lg p-4 block md:hidden"
              onClick={handleSideBar}
            >
              <FaBars />
            </button>
          </div>
          <p className="text-xl font-semibold font-mono mr-2">
            Techversity Tech University
          </p>
        </div>
        <ul className="w-full flex flex-col  items-center">
          <li
            onClick={() => {
              setActivePage(<AddCourse />);
              handleSideBar();
            }}
            className="mt-2 bg-orange-700 rounded-xl hover:bg-orange-800 p-4 w-3/4 text-white cursor-pointer text-center"
          >
            Add Course
          </li>
          <li
            onClick={() => {
              setActivePage(<ViewCourses />);
              handleSideBar();
            }}
            className="mt-2 bg-orange-700 rounded-xl hover:bg-orange-800 p-4 w-3/4 text-white cursor-pointer text-center"
          >
            View Courses
          </li>
          <li
            onClick={() => {
              setActivePage(<AddDepartment />);
              handleSideBar();
            }}
            className="mt-2 bg-orange-700 rounded-xl hover:bg-orange-800 p-4 w-3/4 text-white cursor-pointer text-center"
          >
            Add Department
          </li>
          <li
            onClick={() => {
              setActivePage(<ViewDepartments />);
              handleSideBar();
            }}
            className="mt-2 bg-orange-700 rounded-xl hover:bg-orange-800 p-4 w-3/4 text-white cursor-pointer text-center"
          >
            View Departments
          </li>
          <li
            onClick={() => {
              setActivePage(<EnrollStudent />);
              handleSideBar();
            }}
            className="mt-2 bg-orange-700 rounded-xl hover:bg-orange-800 p-4 w-3/4 text-white cursor-pointer text-center"
          >
            Enroll Student
          </li>
          <li
            onClick={() => {
              setActivePage(<RegisterStudent />);
              handleSideBar();
            }}
            className="mt-2 bg-orange-700 rounded-xl hover:bg-orange-800 p-4 w-3/4 text-white cursor-pointer text-center"
          >
            Register Student
          </li>
          <li
            onClick={() => {
              setActivePage(<ViewRegisteredStudents />);
              handleSideBar();
            }}
            className="mt-2 bg-orange-700 rounded-xl hover:bg-orange-800 p-4 w-3/4 text-white cursor-pointer text-center"
          >
            View Registered Students
          </li>
        </ul>
      </div>
      <div
        id="maincontent"
        className="w-full md:w-3/4  md:flex flex-col ease-in-out"
      >
        <div className="h-20 bg-slate-100 dark:bg-slate-950 border-b-2 border-slate-500 flex justify-between items-center">
          <div className="ml-4 ">
            <button className="p-4 block md:hidden" onClick={handleSideBar}>
              <FaBars />
            </button>
          </div>
          <div className="mr-4">
            <span className="mr-3">{firstName + " " + lastName}</span>
            <span className="mr-5">
              <Link href="/" onClick={() => localStorage.removeItem("Auth")}>
                Logout
              </Link>
            </span>
            {isClient ? <DarkMode /> : null}
          </div>
        </div>
        <div className="w-full h-full bg-orange-200">{activePage}</div>
      </div>
    </div>
  );
};

export default Dashboard;
