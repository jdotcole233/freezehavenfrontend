import { Link } from "react-router-dom";
import SaleCard from "../UtilityComponent/SaleCard";

const Sales = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Product List</h1>
          <p className="text-sm font-thin">Sell products</p>
        </div>

        <Link
          to="/transactions"
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
          View Transactions
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-4  flex-wrap gap-x-14 gap-y-2">
        {
            [1,2,3,4,1,1,1,1,1,1].map((product, key) => (
                <SaleCard key={key} />
            ))
        }
      </div>
    </div>
  );
};

export default Sales;
