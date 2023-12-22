import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddEmployee = ({ closeModal, editEmployee, setEditEmployee }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);


  const submitForm = (data) => {
    setLoading(true);
    let method = "POST"
    let url = "http://127.0.0.1:8000/api/employee"

    if (Object.keys(editEmployee).length){
      method = "PUT"
      url = url + `/${editEmployee.id}`
    }

    const body = JSON.stringify(data)

    fetch(url, {
      method: method,
      body: body,
      headers: {
        'Content-type': 'application/json'
      } 
    })
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response)
      setLoading(false)
      toast.success(response.message, {
        theme: "colored"
      })
      closeModal(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
      toast.error("Something went wrong!", {
        theme: "colored"
      })
    })
    .finally(() => {
      setLoading(false)
    })
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
                defaultValue={editEmployee?.first_name || ""}
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
                defaultValue={editEmployee?.last_name || ""}
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
                defaultValue={editEmployee?.date_employed || ""}
                {...register("date_employed", {
                  required: "Enter date of employement",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="date"
                placeholder="E.g. Kpanla"
              />
              <span className="text-red-500">
                {errors?.date_employed &&
                  errors?.date_employed?.message}
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
              disabled={loading}
              onClick={handleSubmit(submitForm)}
              className=" disabled:bg-slate-800 bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md "
            >
              {loading ? (
                "loading..."
              ) : (
                <span>
                  {Object.keys(editEmployee).length ? "Update" : "Add"}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
