import SAUSAGE from "../../assets/Sadia_sausage.png";
import { mockProductDetails } from "../../assets/data";
import { DataTable } from "../UtilityComponent";
import AddProductDetails  from "./AddProductDetails";
import { useState } from "react";


const columnNames = [
    "Weight", "Quantity", "Cost Price", "Unit Price", "Total Income",
    "Profit", "Created By"
]

const ViewProduct = () => {
  const [addProductDetailsModal, setProductDetailsModal] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="border border-slate-400 shadow-md w-80 h-64 rounded-md p-2">
          <h1 className="font-bold text-lg">Product Summary</h1>
          <table className="w-full">
            <tbody>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Product Name:</td>
                <td>Red Fish</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Product Type:</td>
                <td>Fish</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">
                  Product Category:
                </td>
                <td>Frozen Food</td>
              </tr>
              <tr className="h-10 border-b border-slate-500">
                <td className="font-semibold text-slate-500">Created By:</td>
                <td>John Bellushi</td>
              </tr>
              <tr className="h-10">
                <td className="font-semibold text-slate-500">
                  Product Status:
                </td>
                <td>
                  <span className="border px-2 rounded-full bg-green-500 text-white text-sm">
                    In Stock
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border border-slate-400 shadow-md w-80 h-64 rounded-md overflow-hidden">
          <div
            style={{
              backgroundImage: `url(${SAUSAGE})`,
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
            className=" h-52"
          ></div>
          <div className="px-2 flex py-2 justify-center">
            <button onClick={ ()=> {setProductDetailsModal(true)}} className="bg-orange-500 px-2 py-1 rounded-md text-white">
              Add Product Details
            </button>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div>
        <h1 className="text-lg font-semibold">Product Details List</h1>
        <p>Manage product details</p>
        </div>

        <DataTable columnNames={columnNames} rows={mockProductDetails} />
        {
          addProductDetailsModal && <AddProductDetails closeModal={setProductDetailsModal}/>
        }
      </div>
    </div>
  );
};

export default ViewProduct;
