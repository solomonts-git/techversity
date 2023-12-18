import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCourse = () => {
  const departments = JSON.parse(
    localStorage.getItem("departmentsall") as string
  );
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [dep, setDep] = useState("");

  const courses = JSON.parse(localStorage.getItem("courseDetail") as string);
  const handleCourseDetail = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    localStorage.setItem(
      "courseDetail",
      JSON.stringify([...courses, { courseCode, courseName, department: dep }])
    );
    setCourseCode("");
    setCourseName("");
    setDep("");
    toast("Course added");
  };

  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100 flex justify-center items-start">
      <div className="w-full my-10 flex justify-center">
        <form className="w-full sm:w-3/4 ">
          <div className="w-full flex justify-center">
            <p className="text-3xl font-semibold">Register New Course</p>
          </div>
          <div className="w-full mt-4">
            <label htmlFor="courseCode" className="font-semibold text-lg">
              Course Code:
            </label>
          </div>
          <div className="w-full mt-2">
            <input
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              type="text"
              id="courseCode"
              placeholder="Enter the course code..."
              className="p-4 w-full md:w-3/4 text-slate-950 rounded-lg border-2 border-black focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="courseName" className="font-semibold text-lg">
              Course Name:
            </label>
          </div>
          <div className="mt-2">
            <input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              type="text"
              id="courseName"
              placeholder="Enter the course name..."
              className="p-4 w-full border-2 text-slate-950 border-black rounded-lg md:w-3/4 focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="department" className="font-semibold text-lg">
              Select Department Name:
            </label>
          </div>
          <div className="mt-2">
            <select
              value={dep}
              onChange={(e) => setDep(e.target.value)}
              className="p-4 w-full md:w-3/4 rounded-lg border-2 text-slate-950 border-black focus:outline-none"
            >
              <option selected={true} disabled>
                Select Department
              </option>
              {departments?.map((dep: { departmentName: string }) => (
                <option key={dep.departmentName} value={dep.departmentName}>
                  {dep.departmentName}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <button
              disabled={!courseCode || !courseName || !dep}
              onClick={handleCourseDetail}
              className="w-full md:w-3/4 p-4 rounded-lg bg-blue-400 hover:bg-blue-500"
            >
              Add Course
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
