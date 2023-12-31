
import { DataTable } from "../UtilityComponent";
import { useState } from "react";
import { mockExpenses } from "../../assets/data";
import { AddExpenses} from ".";

const columnNames= ["Expense Category", "Reference", "Date","Amount.", "Description"]

const Expenses = () => {
  const [addExpense, setAddExpense] = useState(false);
  const [rowData, setRowData] = useState({});

  const editRow = (row) => {
    setRowData(row);
    setAddExpense(true);
  } 

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Expenses List</h1>
          <p className="text-sm font-thin">Manage your expenses</p>
        </div>

        <button onClick={() =>setAddExpense(true)} className="flex border px-4 py-2 bg-orange-400 rounded-md text-white">
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
          Add New Expense
        </button>
      </div>
      <DataTable columnNames={columnNames} rows={mockExpenses} editRow={editRow}/>

      {addExpense && <AddExpenses closeModal={setAddExpense} rowData={rowData}/>}
    </div>
  );
};

export default Expenses;
