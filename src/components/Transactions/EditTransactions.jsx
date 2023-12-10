const EditTransaction = ({
  closeModal,
  editTransaction,
  setEditTransaction,
}) => {
  return (
    <div className="flex transition-opacity justify-center py-8 items-center bg-black/25 z-50 absolute top-0 left-0 w-full h-screen">
      {/* Add Product Form */}
      <div className=" w-[900px] h-auto rounded-md bg-white shadow-md">
        <div className="flex justify-between py-4 px-4">
          <h1 className="text-lg font-semibold"> Update Transaction</h1>
          <svg
            onClick={() => {
              closeModal(false);
              setEditTransaction({});
            }}
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

        {/* Form */}
        <form className="flex flex-col gap-3 px-4" action="">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Customer Name">
                Customer Name
              </label>
              <select
                value={editTransaction.customer_name || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose Type</option>
                <option value="Fish">Fish</option>
                <option value="Poultry">Poultry</option>
                <option value="Meat">Meat</option>
              </select>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Product Name">
                Product Name
              </label>
              <select
                value={editTransaction.product_name || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose Category</option>
                <option value="CASH">CASH</option>
                <option value="Water">Water</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Weight">
                Weight
              </label>
              <input
                value={editTransaction?.weight || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="number"
                placeholder="E.g. Kpanla"
              />
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Unit price">
                Unit price
              </label>
              <input
                value={editTransaction?.weight || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="number"
                placeholder="E.g. Kpanla"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label
                className="text-lg font-thin mb-2"
                htmlFor="Payment Method"
              >
                Payment Method
              </label>
              <select
                value={editTransaction.payment_type || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose Payment Method</option>
                <option value="CASH">Cash</option>
                <option value="MOBILEMONEY">Mobile Money</option>
                <option value="CARD">Card</option>
              </select>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Total Price">
                Total Price
              </label>
              <input
                value={editTransaction?.total_price || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="number"
                placeholder="E.g. Kpanla"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Amount Paid">
                Amount Paid
              </label>
              <input
                value={editTransaction?.amount_paid || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="number"
                placeholder="E.g. Kpanla"
              />
            </div>
            <div className="w-full ">
              <label
                className="text-lg font-thin mb-2"
                htmlFor="Customer Balance"
              >
                Customer Balance
              </label>
              <input
                value={editTransaction?.customer_balance || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="number"
                placeholder="E.g. Kpanla"
                contentEditable={false}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Created By">
                Created By
              </label>
              <select
                value={editTransaction.created_by || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose Payment Method</option>
                <option value="CASH">Cash</option>
                <option value="MOBILEMONEY">Mobile Money</option>
                <option value="CARD">Card</option>
              </select>
            </div>
            <div className="w-full ">
              <label
                className="text-lg font-thin mb-2"
                htmlFor="Date Of Purchase"
              >
                Date Of Purchase
              </label>
              <input
                value={editTransaction.date_of_purchase || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="date"
                placeholder="E.g. Kpanla"
              />
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <button className=" bg-slate-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
              Cancel
            </button>
            <button className=" bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransaction;
