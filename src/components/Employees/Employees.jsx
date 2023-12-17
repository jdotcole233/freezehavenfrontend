import { mockEmployees } from "../../assets/data";
import { DataTable } from "../UtilityComponent";
import { useEffect, useState } from "react";
import { AddEmployee } from ".";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const columnNames = [
  "First Name",
  "Last Name",
  "Phone number",
  "Date of Employement",
  "Date of Termination",
  "Location",
  "DOB",
  "Gender",
];

const Employees = () => {
  const [employeeModal, setEmployeeModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState({});
  const [employees, setEmployees] = useState([])

  const navigate = useNavigate();

  const editRow = (row) => {
    setEditEmployee(row);
    setEmployeeModal(true);
  };


  const fetchEmployeeData = () => {
    const url = "http://127.0.0.1:8000/api/employee"
    const method = "GET"

    fetch(url, {
      method
    })
    .then(res => res.json())
    .then(response => {
      setEmployees(response)
    })
    .catch(err => {
      toast.error("Failed to fetch employees")
    })
  }

  useEffect(() => {
   fetchEmployeeData()    
  }, [employeeModal])


  const viewRow = (id) => {
    navigate(`/employees/${id}`)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Employees List</h1>
          <p className="text-sm font-thin">Manage your employees</p>
        </div>

        <button
          onClick={() => setEmployeeModal(true)}
          className="flex border px-4 py-2 bg-orange-400 rounded-md text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add New Employee
        </button>
      </div>

      <DataTable rows={employees} columnNames={columnNames} editRow={editRow} viewRow={viewRow} />
      {
        employeeModal && (<AddEmployee closeModal={setEmployeeModal}  editEmployee={editEmployee} setEditEmployee={setEditEmployee} />)
      }
    </div>
  );
};

export default Employees;
