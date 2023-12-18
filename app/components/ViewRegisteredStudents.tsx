import React, { useState, useEffect } from "react";

const ViewRegisteredStudents = () => {
  let ord = 0;
  const students = JSON.parse(localStorage.getItem("studentinfo") as string);

  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100 flex justify-center items-start">
      <div className="w-full my-10 flex justify-center">
        <table className="table-fixed border-collapse border w-full mx-10 border-slate-900  dark:border-slate-100">
          <thead>
            <tr>
              <th>No</th>
              <th>Student ID</th>
              <th>Student Name</th>
            </tr>
          </thead>
          <tbody>
            {students!.map(
              (student: { studentId: string; studentName: string }) => (
                <tr key={student.studentId}>
                  <td>{++ord}</td>
                  <td>{student.studentId}</td>
                  <td>{student.studentName}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRegisteredStudents;
