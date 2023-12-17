import { useForm } from "react-hook-form";

const AddProductDetails = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProductDetailsForm = (data) => {
    console.log(data)
  }

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
        <div className="px-4 flex flex-col gap-3">
          <div className="flex w-[850px items-center justify-between">
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="weight">
                Weight (kg)
              </label>
              <input
                {
                  ...register("weight",{
                    required: "Weight is required"
                  })
                }
                className=" w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="e.g. 10kg"
              />
              <span className="text-red-500">
                {errors?.weight && errors?.weight?.message}
              </span>
            </div>
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="quantity">
                Quantity
              </label>
              <input
              {
                ...register("quantity", {
                  required: "Quantity is required"
                })
              }
                className="w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="2"
              />
              <span className="text-red-500">
                {errors?.quantity && errors?.quantity?.message}
              </span>
            </div>
          </div>
          <div className="flex w-[850px] items-center justify-between">
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="cost price">
                Cost Price (&#8373;)
              </label>
              <input
              {
                ...register("cost_price", {
                  required: "Cost price is required"
                })
              }
                className="w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="100.00"
              />
              <span className="text-red-500">
                {errors?.cost_price && errors?.cost_price?.message}
              </span>
            </div>
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="unit price">
                Unit Price (&#8373;)
              </label>
              <input
              {
                ...register("unit_price", {
                  required: "Enter unit price"
                })
              }
                className="w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="20.00"
              />
              <span className="text-red-500">
                {errors?.unit_price && errors?.unit_price?.message}
              </span>
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

          <div className="flex gap-4 py-4">
            <button className="bg-slate-500 rounded-md w-36 px-4 py-2 text-lg text-white">
              Cancel
            </button>
            <button onClick={handleSubmit(submitProductDetailsForm)} className="bg-orange-500 rounded-md text-lg text-white px-4 py-2 w-36">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetails;
