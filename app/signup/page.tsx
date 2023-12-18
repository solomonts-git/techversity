"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  useEffect(() => {
    localStorage.setItem(
      "userDetail",
      JSON.stringify([
        {
          firstName: "Jone",
          lastName: "Doe",
          email: "doe@me.com",
          password: "123",
        },
      ])
    );
  }, []);
  const prevUser = JSON.parse(localStorage.getItem("userDetail") as string);

  const handleInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.setItem(
      "userDetail",
      JSON.stringify([...prevUser, { firstName, lastName, email, password }])
    );
    setFirstName("");
    setLastName("");
    setPassword("");
    setCPassword("");
    setEmail("");
    toast("User signedup successfully");
  };

  const disabled: boolean = [
    firstName,
    lastName,
    email,
    password,
    cpassword,
  ].every(Boolean);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <form
        method="post"
        className="flex rounded flex-col items-center justify-center p-8 w-full md:w-3/4"
      >
        <fieldset className="w-full md:w-1/2">
          <legend>
            <p className="w-full text-xl center dark:text-slate-100  text-slate-950  font-bold">
              Signup
            </p>
          </legend>
          <div className="flex rounded flex-col items-center justify-center w-full">
            <input
              value={firstName}
              type="text"
              placeholder="Enter your Firstname"
              className="w-full p-4 my-3 focus:outline-none rounded-sm text-slate-900 font-mono"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              value={lastName}
              type="text"
              placeholder="Enter your Lastname"
              className="w-full p-4 my-3 focus:outline-none rounded-sm text-slate-900 font-mono"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              value={email}
              type="email"
              placeholder="Enter Email"
              className="w-full p-4 my-3 focus:outline-none rounded-sm text-slate-900 font-mono"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              value={password}
              type="password"
              placeholder="Enter password"
              className="w-full p-4 my-3 focus:outline-none rounded-sm text-slate-900 font-mono"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              value={cpassword}
              type="password"
              placeholder="Confirm Your password"
              className="w-full p-4 my-3 focus:outline-none rounded-sm text-slate-900 font-mono"
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />

            <button
              className="w-full px-20 py-4 rounded-md bg-orange-500 cursor-pointer"
              disabled={!disabled}
              onClick={(e) => handleInput(e)}
            >
              {!disabled ? "Fill All Fields" : "Signup"}
            </button>
            <ToastContainer />
            <p className="text-slate-900 dark:text-slate-100">
              Back to <Link href="/login">Login</Link>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
