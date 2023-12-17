const AddExpenses = ({ rowData, closeModal, setRowData }) => {
  
  return (
    <div className="fixed flex justify-center z-50 items-center py-4 top-0 left-0 bg-black/25 w-full h-full">
      <div className="bg-white w-[900px] h-auto rounded-md">
        <div className="flex justify-between py-4 px-4">
          <h1 className="text-lg font-semibold">
            {Object.keys(rowData)?.length ? "Edit" : "Add New"} Expense
          </h1>
          <svg
            onClick={() => {
              closeModal(false);
              setRowData({});
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

        <div className="flex flex-col gap-3 px-4" action="">
          <div className="w-full ">
            <label className="text-lg font-thin mb-2" htmlFor="Category">
              Category
            </label>
            <select value={rowData?.expense_category} className="border px-2  outline-none h-12 rounded-md w-full">
              <option value="">Choose category</option>
              <option value="Fish">Fish</option>
              <option value="Poultry">Poultry</option>
              <option value="Meat">Meat</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Reference">
                Reference
              </label>
              <input
                defaultValue = {rowData?.reference || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="text"
                placeholder="Reference"
              />
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Date">
                Date
              </label>
              <input
                  value={rowData?.date}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="date"
                placeholder="2023-12-12"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Amount">
                Amount
              </label>
              <input
                  value={rowData?.amount}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="number"
                placeholder="e.g 300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Description">
                Description
              </label>
              <textarea value={rowData?.description} rows={10} className="border px-2  outline-none h-12 rounded-md w-full"></textarea>
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <button className=" bg-slate-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
              Cancel
            </button>
            <button className=" bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
              {Object.keys(rowData).length ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenses;
