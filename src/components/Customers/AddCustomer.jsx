const AddCustomer = ({ closeModal, rowData, setRowData }) => {
  return (
    <div className="absolute flex justify-center items-center py-4 top-0 left-0 bg-black/25 w-full h-full">
      <div className="bg-white w-[900px] h-auto rounded-md">
        <div className="flex justify-between py-4 px-4">
          <h1 className="text-lg font-semibold">
            {Object.keys(rowData).length ? "Edit" : "Add New"} Customer
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

        <form className="flex flex-col gap-3 px-4" action="">
          <div className="w-full ">
            <label className="text-lg font-thin mb-2" htmlFor="Customer Name">
              Customer Name
            </label>
            <input
              value={rowData?.customer_name || ""}
              className="border px-2  outline-none h-12 rounded-md w-full"
              type="text"
              placeholder="E.g. James Griffin"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Phone number">
                Phone number
              </label>
              <input
                value={rowData?.phone_number || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="tel"
                placeholder="E.g. 0503848414"
              />
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Location">
                Location
              </label>
              <input
                value={rowData?.location}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="text"
                placeholder="E.g. Ablor Adjei"
              />
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
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
