import React, { useState, useEffect } from "react";

const EnrollStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [dep, setDep] = useState("");

  const departments = JSON.parse(
    localStorage.getItem("departmentsall") as string
  );
  const students = JSON.parse(localStorage.getItem("studentinfo") as string);
  const enrolledStud = JSON.parse(
    localStorage.getItem("enrolledstud") as string
  );

  const handleEnrolledStudent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    JSON.stringify([...enrolledStud, { studentId, academicYear, dep }]);
  };
  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100 flex justify-center items-start">
      <div className="w-full my-10 flex justify-center items-center">
        <form className="w-full md:w-3/4 ">
          <div className="w-full flex justify-center">
            <p className="text-3xl font-semibold">Enroll Student</p>
          </div>
          <div className="mt-4 w-full">
            <label htmlFor="studentId" className="font-semibold text-lg">
              Student Id:
            </label>
          </div>
          <div className="mt-2 w-full">
            <select
              value={studentId}
              required
              onChange={(e) => setStudentId(e.target.value)}
              id="studentId"
              className="p-4 w-full md:w-3/4 text-slate-950 rounded-lg border-2 border-black focus:outline-none"
            >
              <option disabled selected>
                Select Student
              </option>
              {students.map(
                (student: { studentId: string; studentName: string }) => (
                  <option value={student.studentId} key={student.studentId}>
                    {student.studentName}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mt-4 w-full">
            <label htmlFor="year" className="font-semibold text-lg">
              Academic Year:
            </label>
          </div>
          <div className="mt-2 w-full">
            <input
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              required
              type="text"
              id="year"
              placeholder="Enter the academic year..."
              className="p-4 w-full  md:w-3/4  text-slate-950 rounded-lg border-2 border-black focus:outline-none"
            />
          </div>
          <div className="mt-4 w-full">
            <label htmlFor="department" className="font-semibold text-lg">
              Select Department Name:
            </label>
          </div>
          <div className="mt-2 w-full">
            <select
              value={dep}
              onChange={(e) => setDep(e.target.value)}
              className="p-4 w-full md:w-3/4 text-slate-950 rounded-lg border-2 border-black focus:outline-none"
            >
              <option disabled selected>
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
              disabled={!studentId || !academicYear || !dep}
              onClick={handleEnrolledStudent}
              className="w-full md:w-3/4 p-4 rounded-lg bg-blue-400 hover:bg-blue-500"
            >
              Enroll Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollStudent;
