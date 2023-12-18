import React from "react";

const ViewDepartments = () => {
  const departments = JSON.parse(
    localStorage.getItem("departmentsall") as string
  );
  let ord = 0;
  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex justify-center items-start">
      <div className="w-full my-10 flex justify-center">
        <table className="table-fixed border-collapse border  border-slate-900  dark:border-slate-100 w-full mx-10">
          <thead>
            <tr>
              <th>No</th>
              <th>Department Name</th>
            </tr>
          </thead>
          <tbody>
            {departments!.map((department: { departmentName: string }) => (
              <tr key={department.departmentName}>
                <td>{++ord}</td>
                <td>{department.departmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDepartments;
