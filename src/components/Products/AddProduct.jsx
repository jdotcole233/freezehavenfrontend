const AddProduct = ({ closeModal, editProduct, setEditProduct }) => {
  return (
    <div className="flex transition-opacity justify-center py-8 items-center bg-black/25 z-50 absolute top-0 left-0 w-full h-screen">
      {/* Add Product Form */}
      <div className=" w-[900px] h-auto rounded-md bg-white shadow-md">
        <div className="flex justify-between py-4 px-4">
          <h1 className="text-lg font-semibold"> {Object.keys(editProduct).length ? 'Edit': 'Add New'} Product</h1>
          <svg
            onClick={() => {
              closeModal(false)
              setEditProduct({})
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
          <div className="w-full ">
            <label className="text-lg font-thin mb-2" htmlFor="Product Name">
              Product Name
            </label>
            <input
              value={editProduct.product_name ||''}
              className="border px-2  outline-none h-12 rounded-md w-full"
              type="text"
              placeholder="E.g. Kpanla"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Product Name">
                Product Type
              </label>
              <select value={editProduct.product_type ||''} className="border px-2  outline-none h-12 rounded-md w-full">
                <option value="">Choose Type</option>
                <option value="Fish">Fish</option>
                <option value="Poultry">Poultry</option>
                <option value="Meat">Meat</option>
              </select>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Product Name">
                Product Category
              </label>
              <select value={editProduct.product_category || ''} className="border px-2  outline-none h-12 rounded-md w-full">
                <option value="">Choose Category</option>
                <option value="Frozen Food">Frozen Food</option>
                <option value="Water">Water</option>
              </select>
            </div>
          </div>

          <div className="w-full  ">
            <label className="text-lg font-thin mb-2" htmlFor="Product Name">
              Product Image
            </label>
            <input
              className=" px-2  outline-none h-12 rounded-md w-full"
              type="file"
              placeholder="E.g. Kpanla"
            />
          </div>

          <div className="flex gap-4 py-4">
            <button className=" bg-slate-500 px-4 py-2 w-36 text-lg text-white rounded-md ">Cancel</button>
            <button className=" bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
            {Object.keys(editProduct).length ? "Update" : "Add"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;
