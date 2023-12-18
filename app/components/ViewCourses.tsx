import React from "react";

const ViewCourses = () => {
  const courses = JSON.parse(localStorage.getItem("courseDetail") as string);
  let ord = 0;
  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-100 flex justify-center items-start">
      <div className="w-full my-10 flex justify-center">
        <table className="table-auto border-collapse border border-slate-900  dark:border-slate-100 w-full mx-10">
          <thead>
            <tr>
              <th>No</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {courses!.map(
              (course: {
                courseCode: string;
                courseName: string;
                department: string;
              }) => (
                <tr>
                  <td>{++ord}</td>
                  <td>{course.courseCode}</td>
                  <td>{course.courseName}</td>
                  <td>{course.department}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCourses;
