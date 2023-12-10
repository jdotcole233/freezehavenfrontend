import { useState } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "../UtilityComponent";
import { mockTransactions } from "../../assets/data";
import EditTransaction from "./EditTransactions";


const columnNames = [
    'Customer', 'Product', 'Weight', 'Price', 'Total price', 'Payment', 'Amt Paid', 'Balance', 'Created', 'Purchase on'
]


const Transactions = () => {
  const [transactionModal, setTransactionModal] = useState(false)
  const [transactionRow, setTransactionRow] = useState({})

  const editRow = (row) => {
    setTransactionModal(true)
    setTransactionRow(row)
  } 
    return (
        <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Transactions List</h1>
            <p className="text-sm font-thin">Manage your transactions</p>
          </div>
  
          <Link to="/sales" className="flex border px-4 py-2 bg-orange-400 rounded-md text-white">
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
            Add New Transaction
          </Link>
        </div>
  
        <DataTable  rows={mockTransactions} columnNames={columnNames} editRow={editRow} />
        {
          transactionModal && (
            <EditTransaction closeModal={setTransactionModal} editTransaction={transactionRow} setTransactionRow={setTransactionRow} />
          ) 
        }
      </div>
    )
}

export default Transactions;