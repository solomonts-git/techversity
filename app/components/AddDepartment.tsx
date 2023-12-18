import { randomUUID } from "crypto";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");

  const departments = JSON.parse(
    localStorage.getItem("departmentsall") as string
  );

  const handleDepartment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    localStorage.setItem(
      "departmentsall",
      JSON.stringify([...departments, { id: randomUUID, departmentName }])
    );
    setDepartmentName("");
    toast("Department Registered successfully");
  };

  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100 flex justify-center items-start">
      <div className="w-full my-10 flex  justify-center items-start">
        <form className="w-full sm:w-3/4">
          <div className="w-full flex justify-center">
            <p className="text-3xl font-semibold">Register New Department</p>
          </div>
          <div className="mt-4 w-full">
            <label htmlFor="departmentName" className="font-semibold text-lg">
              Department Name
            </label>
          </div>
          <div className="mt-2 w-full">
            <input
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              type="text"
              id="departmentName"
              placeholder="Enter the DepartmentName..."
              className="p-4 w-full sm:w-3/4 text-slate-950 rounded-lg border-2 border-black focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <button
              disabled={!departmentName}
              onClick={handleDepartment}
              className="w-full sm:w-3/4  p-4 rounded-lg bg-blue-400 hover:bg-blue-500"
            >
              Add Department
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
