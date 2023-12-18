import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");

  const students = JSON.parse(localStorage.getItem("studentinfo") as string);
  const handleStudentReg = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    localStorage.setItem(
      "studentinfo",
      JSON.stringify([...students, { studentId, studentName }])
    );
    toast("Student Registered");
  };

  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100 flex justify-center items-start">
      <div className="w-full my-10 flex  justify-center items-center">
        <form className="w-full md:w-3/4">
          <div className="w-full flex justify-center">
            <p className="text-3xl font-semibold">Register Student</p>
          </div>
          <div className="mt-4 w-full">
            <label htmlFor="studentId" className="font-semibold text-lg">
              Student Id:
            </label>
          </div>
          <div className="mt-2 w-full">
            <input
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              type="text"
              id="studentId"
              placeholder="Enter the Student Id..."
              className="p-4 w-full md:w-3/4 text-slate-950 rounded-lg border-2 border-black focus:outline-none"
            />
          </div>
          <div className="mt-4 w-full">
            <label htmlFor="studentName" className="font-semibold text-lg">
              Student Name:
            </label>
          </div>
          <div className="mt-2 w-full">
            <input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              type="text"
              id="studentName"
              placeholder="Enter the Student Name..."
              className="p-4 w-full md:w-3/4 text-slate-950 rounded-lg border-2 border-black focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <button
              disabled={!studentId || !studentName}
              onClick={handleStudentReg}
              className="w-full md:w-3/4 p-4 rounded-lg bg-blue-400 hover:bg-blue-500"
            >
              Register Student
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;
