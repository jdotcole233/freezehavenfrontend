import { DataTable } from "../UtilityComponent";
import { mockProducts } from "../../assets/data";


const columnNames = [
    'Product Name', 'Product Type', 'Cost Price', 'Category', 'Weight', 'Quantity'
]

const Products = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Product List</h1>
          <p className="text-sm font-thin">Manage your products</p>
        </div>

        <button className="flex border px-4 py-2 bg-orange-400 rounded-md text-white">
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
          Add New Product
        </button>
      </div>

      <DataTable  rows={mockProducts} columnNames={columnNames}/>
    </div>
  );
};

export default Products;
