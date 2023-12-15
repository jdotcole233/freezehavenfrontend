const AddProductDetails = ({closeModal}) => {
  return (
    <div className="fixed flex z-50 justify-center items-center py-4 top-0 left-0 bg-black/25 w-full h-full">
      <div className="flex flex-col p-4 bg-white w-[900px] h-auto rounded-md">
        <div className="flex justify-between py-4 px-4 cursor-pointer">
          <h1 className="text-lg font-semibold">Manage Product Details</h1>
          <svg
            onClick={() => {
              closeModal(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#f00"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form className="px-4 flex flex-col gap-3" action="">
          <div className="flex p-4 w-[850px items-center justify-between">
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="weight">
                Weight (kg)
              </label>
              <input
                className=" w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="e.g. 10kg"
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="2"
              />
            </div>
          </div>
          <div className="flex p-4 w-[850px] items-center justify-between">
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="cost price">
                Cost Price (&#8373;)
              </label>
              <input
                className="w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="100.00"
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="unit price">
                Unit Price (&#8373;)
              </label>
              <input
                className="w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="20.00"
              />
            </div>
            <div className="flex flex-col  ">
            <label className="text-lg font-thin mb-2" htmlFor="Total Income">
              Total Income (&#8373;)
            </label>
            <input
              className="bg-lime-700 text-white w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
              type="number"
              placeholder="20.00"
            />
          </div>
          <div className="flex flex-col  ">
            <label className="text-lg font-thin mb-2" htmlFor="profit">
              Profit (&#8373;)
            </label>
            <input
              className="w-48 text-white border border-gray-400 px-2 h-12 outline-none rounded-md bg-lime-700  "
              type="number"
              placeholder="20.00"
            />
          </div>
          </div>
          

          <div className="flex flex-col  ">
            <label className="text-lg font-thin mb-2" htmlFor="created by">
              Created by:
            </label>
            <input
              className="border border-gray-400 px-2 h-12 outline-none rounded-md"
              type="text"
              placeholder="Kwaw"
            />
          </div>
          <div className="flex gap-4 py-4">
            <button className="bg-slate-500 rounded-md w-36 px-4 py-2 text-lg text-white">
              Cancel
            </button>
            <button className="bg-orange-500 rounded-md text-lg text-white px-4 py-2 w-36">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductDetails;
