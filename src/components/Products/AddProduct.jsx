import { useForm } from "react-hook-form";

const AddProduct = ({ closeModal, editProduct, setEditProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProductForm = (data) => {
    console.log(data);
  };

  return (
    <div className="flex transition-opacity justify-center py-8 items-center bg-black/25 z-50 fixed top-0 left-0 w-full h-screen">
      {/* Add Product Form */}
      <div className=" w-[900px] h-auto rounded-md bg-white shadow-md">
        <div className="flex justify-between py-4 px-4">
          <h1 className="text-lg font-semibold">
            {" "}
            {Object.keys(editProduct).length ? "Edit" : "Add New"} Product
          </h1>
          <svg
            onClick={() => {
              closeModal(false);
              setEditProduct({});
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
        <div className="flex flex-col gap-3 px-4">
          <div className="w-full ">
            <label className="text-lg font-thin mb-2" htmlFor="Product Name">
              Product Name
            </label>
            <input
              defaultValue={editProduct.product_name || ""}
              {...register("product_name", {
                required: "Product name is required",
              })}
              className="border px-2  outline-none h-12 rounded-md w-full"
              type="text"
              placeholder="E.g. Kpanla"
            />
            <span className="text-red-500">
              {errors?.product_name && errors?.product_name?.message}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Product Name">
                Product Type
              </label>
              <select
                defaultValue={editProduct.product_type || ""}
                {...register("product_type", {
                  required: "Select a product type",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose Type</option>
                <option value="Fish">Fish</option>
                <option value="Poultry">Poultry</option>
                <option value="Meat">Meat</option>
              </select>
              <span className="text-red-500">
                {errors?.product_type && errors?.product_type?.message}
              </span>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Product Name">
                Product Category
              </label>
              <select
                defaultValue={editProduct.product_category || ""}
                {...register("product_category", {
                  required: "Select a product category",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose Category</option>
                <option value="Frozen Food">Frozen Food</option>
                <option value="Water">Water</option>
              </select>
              <span className="text-red-500">
                {errors?.product_category && errors?.product_category?.message}
              </span>
            </div>
          </div>

          {/* <div className="w-full  ">
            <label className="text-lg font-thin mb-2" htmlFor="Product Name">
              Product Image
            </label>
            <input
              className=" px-2  outline-none h-12 rounded-md w-full"
              type="file"
              placeholder="E.g. Kpanla"
            />
          </div> */}
          <div class="col-span-full">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <svg
                  class="mx-auto h-12 w-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <button className=" bg-slate-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
              Cancel
            </button>
            <button
              onClick={handleSubmit(submitProductForm)}
              className=" bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md "
            >
              {Object.keys(editProduct).length ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
