import { useForm } from "react-hook-form";

const AddEmployee = ({ closeModal, editEmployee, setEditEmployee }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="flex transition-opacity justify-center py-8 items-center bg-black/25 z-50 fixed top-0 left-0 w-full h-screen">
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
        <div className="flex flex-col gap-3 px-4" action="">
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="First Name">
                First Name
              </label>
              <input
                defaultValue={editEmployee?.employee_name || ""}
                {...register("first_name", {
                  required: "First name is required",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="text"
                placeholder="E.g. John"
              />
              <span className="text-red-500">
                {errors?.first_name && errors?.first_name?.message}
              </span>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Last Name">
                Last Name
              </label>
              <input
                defaultValue={editEmployee?.employee_name || ""}
                {...register("last_name", {
                  required: "Last name required",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="text"
                placeholder="E.g. Doe"
              />
              <span className="text-red-500">
                {errors?.last_name && errors?.last_name?.message}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Phone Number">
                Phone Number
              </label>
              <input
                defaultValue={editEmployee?.phone_number || ""}
                {...register("phone_number", {
                  required: "Phone number is required",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="tel"
                placeholder="E.g. 0503889900"
              />
              <span className="text-red-500">
                {errors?.phone_number && errors?.phone_number?.message}
              </span>
            </div>
            <div className="w-full ">
              <label
                className="text-lg font-thin mb-2"
                htmlFor="Date of Employment"
              >
                Date of Employment
              </label>
              <input
                defaultValue={editEmployee?.date_of_employment || ""}
                {...register("date_of_employement", {
                  required: "Enter date of employement",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="date"
                placeholder="E.g. Kpanla"
              />
              <span className="text-red-500">
                {errors?.date_of_employment &&
                  errors?.date_of_employment?.message}
              </span>
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
                defaultValue={editEmployee?.date_of_termination || ""}
                {...register("date_of_termination")}
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
                defaultValue={editEmployee?.location || ""}
                {...register("location", {
                  required: "Location is required",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="text"
                placeholder="E.g. Ablor Adjei"
              />
              <span className="text-red-500">
                {errors?.location && errors?.location?.message}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="w-full">
              <label className="text-lg font-thin mb-2" htmlFor="Gender">
                Gender
              </label>
              <select
                {...register("gender", {
                  required: "Gender is required",
                })}
                defaultValue={editEmployee?.gender || ""}
                className="border px-2  outline-none h-12 rounded-md w-full"
              >
                <option value="">Choose gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
              <span className="text-red-500">
                {errors?.gender && errors?.gender?.message}
              </span>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Date of Birth">
                Date of Birth
              </label>
              <input
                {...register("dob")}
                defaultValue={editEmployee?.dob || ""}
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
            <button
              onClick={handleSubmit(submitForm)}
              className=" bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md "
            >
              {Object.keys(editEmployee).length ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
