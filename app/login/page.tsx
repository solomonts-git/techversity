"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type userDetailType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const userDetail: userDetailType[] = JSON.parse(
      localStorage.getItem("userDetail") as string
    );
    let auth = {};
    const result = userDetail.some(function (value, index) {
      if (value.email === loginEmail && value.password === loginPwd) {
        auth = {
          email: value.email,
          firstName: value.firstName,
          lastName: value.lastName,
        };
        return true;
      } else {
        return false;
      }
    });
    if (result) {
      router.push("/dashboard");

      localStorage.setItem("Auth", JSON.stringify(auth));
    } else {
      alert("invalid credintials");
      setLoginEmail("");
      setLoginPwd("");
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:text-slate-100 text-slate-950 bg-slate-300 dark:bg-slate-950">
      <p className="text-2xl font-bold font-mono ">Login</p>
      <form
        method="post"
        className="flex flex-col items-center justify-center w-full mx-4"
      >
        <input
          value={loginEmail}
          type="text"
          placeholder="Enter username doe@me.com"
          className="w-3/4 md:w-1/4 p-4 mx-3 my-3 focus:outline-none text-slate-950 font-mono"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          value={loginPwd}
          type="password"
          placeholder="Enter password 123"
          className="w-3/4 md:w-1/4 p-4 mx-3 my-3 focus:outline-none text-slate-950 font-mono"
          onChange={(e) => setLoginPwd(e.target.value)}
        />
        <button
          className="w-3/4 md:w-1/4 mx-3 px-20 py-4 rounded-md bg-orange-500"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="dark:text-white">
          New user <Link href="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
