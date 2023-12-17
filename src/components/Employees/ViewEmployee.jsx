import { useEffect, useState } from "react";
import { mockEmployeeDetails } from "../../assets/data";
import { DataTable } from "../UtilityComponent";
import AddEmployeeSalary from "./AddEmployeeSalary";
import { useParams } from "react-router-dom";

const columnNames = ["Salary", "Date paid"];

const ViewEmployee = () => {
    const [addEmployeeSalaryModal, setEmployeeSalaryModal] = useState(false);
    const [employeeSalaries, setEmployeeSalaries] = useState([])
    const [employee, setEmployee] = useState({})
    const {id} = useParams()

    const editRow = (row) => {
      setEmployee(row)
      setEmployeeSalaryModal(true)
    }

    const fetchEmployee = () => {
      const url = `http://127.0.0.1:8000/api/employee/${id}`
      const method = "GET"
  
      fetch(url, {
        method
      })
      .then(res => res.json())
      .then(response => {
        setEmployee(response)
        setEmployeeSalaries(response?.salaries)
      })
      .catch(err => {
        toast.error("Failed to fetch employees")
      })
    }

   
    useEffect(() => {
      fetchEmployee()
    }, [addEmployeeSalaryModal])
   
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="border border-slate-400 shadow-md w-80 h-64 rounded-md p-2">
          <h1 className="font-bold text-lg">Employee Summary</h1>
          <table className="w-full">
            <tbody>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Employee Name:</td>
                <td>{employee?.first_name} {employee?.last_name}</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Phone Number:</td>
                <td>{employee?.phone_number}</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">
                  Gender:
                </td>
                <td>{employee?.gender} ({employee?.dob})</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Working period:</td>
                <td>{employee?.date_employed} to { employee?.date_of_termination ? employee?.date_of_termination : "N/A" }</td>
              </tr>
              <tr className="h-10">
                <td className="font-semibold text-slate-500">
                  Location:
                </td>
                <td>
                  {employee?.location}
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
        <button onClick ={() => setEmployeeSalaryModal(true)}  className="bg-orange-500 px-2 py-1 rounded-md text-white">
            Add Employee Salary
          </button>
        </div>

        <DataTable columnNames={columnNames} rows={employeeSalaries} editRow={editRow} />
        { addEmployeeSalaryModal && <AddEmployeeSalary  closeModal={setEmployeeSalaryModal} employee_id={id} employee={employee} />}
      </div>
 
    </div>
  );
};

export default ViewEmployee;
