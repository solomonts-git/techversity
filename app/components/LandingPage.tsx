import React, { useState, useEffect } from "react";

const LandingPage = () => {
  let [students, setStudents] = useState(0);
  let [departments, setDepartments] = useState(0);
  let [courses, setCourses] = useState(0);
  let [users, setUsers] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      "courseDetail",
      JSON.stringify([
        {
          courseCode: "CoSc2051",
          courseName: "Object Oriented Programming",
          department: "Computer Science",
        },
        {
          courseCode: "CoSc2052",
          courseName: "Advanced Programming",
          department: "Computer Science",
        },
        {
          courseCode: "InTe2031",
          courseName: "Internet Programming",
          department: "Information Technology",
        },
      ])
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "departmentsall",
      JSON.stringify([
        { departmentName: "Information Technology" },
        { departmentName: "Computer Science" },
        { departmentName: "Information System" },
      ])
    );
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "studentinfo",
      JSON.stringify([
        { studentId: "1001", studentName: "Abelakat Lakachew" },
        { studentId: "1002", studentName: "Bereket bora" },
        { studentId: "1003", studentName: "Black Jack" },
        { studentId: "1004", studentName: "Sultan abadi" },
      ])
    );
    localStorage.setItem(
      "enrolledstud",
      JSON.stringify([
        {
          studentId: "1001",
          academicYear: "2023",
          dep: "Information Technology",
        },
        {
          studentId: "1002",
          academicYear: "2023",
          dep: "Information Technology",
        },
        { studentId: "103", academicYear: "2023", dep: "Computer Science" },
      ])
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "studentinfo",
      JSON.stringify([
        { studentId: "1001", studentName: "Abelakat Lakachew" },
        { studentId: "1002", studentName: "Bereket bora" },
        { studentId: "1003", studentName: "Black Jack" },
        { studentId: "1004", studentName: "Sultan abadi" },
      ])
    );
  }, []);

  useEffect(() => {
    setStudents(
      JSON.parse(localStorage.getItem("studentinfo") as string)?.length
    );
    setCourses(
      JSON.parse(localStorage.getItem("courseDetail") as string)?.length
    );
    setUsers(JSON.parse(localStorage.getItem("userDetail") as string)?.length);
    setDepartments(
      JSON.parse(localStorage.getItem("departmentsall") as string)?.length
    );
  }, []);

  return (
    <div className="w-full h-full bg-slate-300 dark:bg-slate-900 text-slate-950 dark:text-slate-100 flex justify-center items-center">
      <div className="w-3/4 text-xl md:text-2xl grid grid-col-1 sm:grid-cols-2 gap-y-5 gap-x-5 justify-center">
        <div className="w-60 md:w-80 h-52  flex flex-col justify-center items-center rounded-lg bg-blue-400">
          <span className="font-semibold block text-center">{students}</span>
          <p>No of students</p>
        </div>
        <div className="w-60 md:w-80 h-52  flex flex-col justify-center items-center rounded-lg bg-violet-400">
          <span className="font-semibold block text-center">{departments}</span>
          <p>No of Departments</p>
        </div>
        <div className="w-60 md:w-80 h-52 flex flex-col justify-center items-center rounded-lg bg-orange-400">
          <span className="font-semibold block text-center">{courses}</span>
          <p>Courses</p>
        </div>
        <div className="w-60 md:w-80 h-52 text-center flex flex-col justify-center items-center rounded-lg bg-sky-600">
          <span className="font-semibold block text-center">{users}</span>
          <p>No of Users</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
