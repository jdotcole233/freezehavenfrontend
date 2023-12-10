import { mockEmployeeDetails } from "../../assets/data";
import { DataTable } from "../UtilityComponent";

const columnNames = ["Salary", "Date paid"];

const ViewEmployee = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="border border-slate-400 shadow-md w-80 h-64 rounded-md p-2">
          <h1 className="font-bold text-lg">Employee Summary</h1>
          <table className="w-full">
            <tbody>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Employee Name:</td>
                <td>Kwame Amoh</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Phone Number:</td>
                <td>0503003033</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">
                  Gender:
                </td>
                <td>Male (1997-04-18)</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Working period:</td>
                <td>2023-04-05 to N/A</td>
              </tr>
              <tr className="h-10">
                <td className="font-semibold text-slate-500">
                  Location:
                </td>
                <td>
                  Ablor Adjei
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pt-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">Employee Salary List</h1>
            <p>Manage employee salary details</p>
          </div>
          <button className="bg-orange-500 px-2 py-1 rounded-md text-white">
            Add Employee Salary
          </button>
        </div>

        <DataTable columnNames={columnNames} rows={mockEmployeeDetails} />
      </div>
    </div>
  );
};

export default ViewEmployee;
