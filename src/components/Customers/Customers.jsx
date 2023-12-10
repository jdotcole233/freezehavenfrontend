import { useState } from "react";
import { mockCustomers } from "../../assets/data";
import DataTable from "../UtilityComponent/DataTable";
import { AddCustomer } from ".";
// import callFrancis from "./francis";

const columnNames = ["Customer Name", "Location", "Phone Number"];

const Customers = () => {
  const [addCustomerModal, setAddCustomerModal] = useState(false);
  const [rowData, setRowData] = useState({})

  const editRow = (row) => {
    setRowData(row)
    setAddCustomerModal(true)
    console.log("Editing row ", row)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Customer List</h1>
          <p className="text-sm font-thin">Manage your customers</p>
        </div>

        <button onClick={() => setAddCustomerModal(true)} className="flex border px-4 py-2 bg-orange-400 rounded-md text-white">
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
          Add New Customer
        </button>
      </div>

      <DataTable rows={mockCustomers} columnNames={columnNames} editRow={editRow} />
      {addCustomerModal && <AddCustomer  closeModal={setAddCustomerModal} rowData={rowData} setRowData={setRowData} />}
    </div>
  );
};

export default Customers;
