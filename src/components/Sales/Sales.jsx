import { useContext } from "react";
import { Link } from "react-router-dom";
import SaleCard from "../UtilityComponent/SaleCard";
import SAUSAGE from "../../assets/Sadia_sausage.png";
import Context from "../../context/context";

const Sales = () => {
  const { cart, showBag, setShowBag, addToCart } = useContext(Context);

  return (
    <div className="p-4 flex">
      <div className="flex-1  p-2">
        <div className={`flex justify-between items-center `}>
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

        <div className="mt-4 grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 1, 1, 1, 1, 1, 1].map((product, key) => (
            <SaleCard key={key} />
          ))}
        </div>
      </div>
      {showBag && (
        <div className="bg-white overflow-y-scroll w-1/4 p-2">
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold text-xl">Order list</h1>
              <p className=" text-sm text-gray-500">Transaction #: 34344223</p>
            </div>
            <svg
              onClick={() => setShowBag(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#f00"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <button className="border-2 flex justify-center mt-4 mb-2 hover:bg-green-500 hover:text-white border-green-500 rounded-md w-full py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add Customer
          </button>

          <select className="border px-2  outline-none h-12 rounded-md w-full">
            <option value="Walk-in">Walk-in</option>
            <option className=" shadow-none" value="Ebenezer">
              Ebenezer
            </option>
          </select>

          <div className=" mt-8 h-80  overflow-y-scroll">
            <div className="flex justify-between mb-2">
              <span className="border rounded-full px-2 py-1 bg-blue-500/60 text-blue-700">
                Total items: {cart?.length}
              </span>
              <button
                onClick={() => addToCart([])}
                className=" font-semibold text-red-800"
              >
                Clear all
              </button>
            </div>

            {cart?.map((bag, key) => (
              <BagCardView key={key} />
            ))}
          </div>

          <div className="mt-4">
            <table className="w-full">
              <tr>
                <td className="font-semibold">Sub total</td>
                <td>9000</td>
              </tr>
              <tr>
                <td className="font-semibold">Tax</td>
                <td>90</td>
              </tr>
              <tr>
                <td className=" font-semibold text-xl text-blue-400">Total</td>
                <td>9090</td>
              </tr>
            </table>
            <div>
              <input
                type="number"
                placeholder="Amount paid"
                className="border px-2 mb-2 mt-2  outline-none h-12 rounded-md w-full"
              />

              <input
                readOnly
                type="number"
                placeholder="Balance"
                className="border px-2  outline-none h-12 rounded-md w-full"
              />
            </div>
            <div className="flex gap-8 py-4">
              <div className="flex-1 py-4 cursor-pointer flex flex-col items-center rounded-md  text-slate-500 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
                CASH
              </div>
              <div className="flex-1 py-4 cursor-pointer flex flex-col items-center rounded-md  text-slate-500 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                MOMO
              </div>
            </div>
            <button className="border bg-blue-800 text-white px-2  outline-none h-12 rounded-md w-full">
              PAY
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const BagCardView = () => {
  return (
    <div className="shadow-md mb-3 overflow-hidden flex  rounded-md">
      <div
        style={{
          backgroundImage: `url(${SAUSAGE})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          objectFit: "cover",
        }}
        className=" w-28"
      ></div>
      <div className="flex items-center p-1 gap-2">
        <div>
          <p className="text-sm font-semibold">Product Name</p>
          <span className="text-xs bg-orange-500 rounded-full px-1 text-white">
            category
          </span>
          <div className="flex items-center gap-2 py-1">
            <button className="border rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </button>
            <span className="text-xs">2</span>
            <button className="border rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-sm">3000</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#f00"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sales;
