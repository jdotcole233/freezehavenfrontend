const AddEmployee = ({ closeModal, editEmployee, setEditEmployee }) => {
  return (
    <div className="flex transition-opacity justify-center py-8 items-center bg-black/25 z-50 absolute top-0 left-0 w-full h-screen">
      {/* Add Product Form */}
      <div className=" w-[900px] h-auto rounded-md bg-white shadow-md">
        <div className="flex justify-between py-4 px-4">
          <h1 className="text-lg font-semibold">
            {" "}
            {Object.keys(editEmployee).length ? "Edit" : "Add New"} Employee
          </h1>
          <svg
            onClick={() => {
              closeModal(false);
              setEditEmployee({});
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
            <label className="text-lg font-thin mb-2" htmlFor="Employee Name">
              Employee Name
            </label>
            <input
              value={editEmployee?.employee_name || ""}
              className="border px-2  outline-none h-12 rounded-md w-full"
              type="text"
              placeholder="E.g. Emmanuel Amissah"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Phone Number">
                Phone Number
              </label>
              <input
                value={editEmployee?.phone_number || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="tel"
                placeholder="E.g. 0503889900"
              />
            </div>
            <div className="w-full ">
              <label
                className="text-lg font-thin mb-2"
                htmlFor="Date of Employment"
              >
                Date of Employment
              </label>
              <input
                value={editEmployee?.date_of_employment || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="date"
                placeholder="E.g. Kpanla"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label
                className="text-lg font-thin mb-2"
                htmlFor="Date of Termination"
              >
                Date of Termination
              </label>
              <input
                value={editEmployee?.date_of_termination || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="date"
                placeholder="E.g. Kpanla"
              />
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Location">
                Location
              </label>
              <input
                value={editEmployee?.location || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="text"
                placeholder="E.g. Ablor Adjei"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Gender">
                Gender
              </label>
              <select
                value={editEmployee?.gender || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Date of Birth">
                Date of Birth
              </label>
              <input
                value={editEmployee?.dob || ""}
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
              {Object.keys(editEmployee).length ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
