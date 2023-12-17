import { useForm } from "react-hook-form";
const AddExpenses = ({ rowData, closeModal, setRowData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

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
            <select
              defaultValue={rowData?.expense_category}
              className="border px-2  outline-none h-12 rounded-md w-full"
              {...register("category", {
                required: "Category is required",
              })}
            >
              <option value="">Choose category</option>
              <option value="Fish">Fish</option>
              <option value="Poultry">Poultry</option>
              <option value="Meat">Meat</option>
            </select>
            <span className="text-red-500">
              {errors?.category && errors?.category?.message}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Reference">
                Reference
              </label>
              <input
                defaultValue={rowData?.reference || ""}
                {...register("reference", {
                  required: "Reference is required",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="text"
                placeholder="Reference"
              />
              <span className="text-red-500">
                {errors?.reference && errors?.reference?.message}
              </span>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Date">
                Date
              </label>
              <input
                defaultValue={rowData?.date}
                {...register("date", { required: "Date is required" })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="date"
                placeholder="2023-12-12"
              />
              <span className="text-red-500">
                {errors?.date && errors?.date?.message}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Amount">
                Amount
              </label>
              <input
                defaultValue={rowData?.amount || ""}
                {...register("amount", { required: "Amount is required" })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="number"
                placeholder="e.g 300"
              />
              <span className="text-red-500">
                {errors?.amount && errors?.amount?.message}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Description">
                Description
              </label>
              <textarea
                defaultValue={rowData?.description || ""}
                rows={10}
                className="border px-2  outline-none h-12 rounded-md w-full"
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>
              <span className="text-red-500">
                {errors?.description && errors?.description?.message}
              </span>
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <button className=" bg-slate-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
              Cancel
            </button>
            <button
              onClick={handleSubmit(submitForm)}
              className=" bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md "
            >
              {Object.keys(rowData).length ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpenses;
