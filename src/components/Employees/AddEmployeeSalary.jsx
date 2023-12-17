import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import moment from "moment";

const AddEmployeeSalary = ({ closeModal, employee_id, employee }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [date_now] = useState(`${moment(employee?.date_paid).month()}-${moment(employee?.date_paid).date()}-${moment(employee?.date_paid).year()}`)

  const submitForm = (data) => {
    setLoading(true);

    data["employee_id"] = employee_id;

    const url = "http://127.0.0.1:8000/api/employee_salaries";
    const method = "POST";
    const body = JSON.stringify(data);

    fetch(url, {
      method: method,
      body: body,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        setLoading(false);
        toast.success(response.message, {
          theme: "colored",
        });
        closeModal(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something went wrong!", {
          theme: "colored",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="fixed flex z-50 justify-center items-center py-4 top-0 left-0 bg-black/25 w-full h-full">
      <div className="flex flex-col p-4 bg-white w-[900px] h-auto rounded-md">
        <div className="flex justify-between py-4 px-4 cursor-pointer">
          <h1 className="text-lg font-semibold">Manage Employee Salary {date_now} </h1>
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
          <div className="flex flex-col  ">
            <label className="text-lg font-thin mb-2" htmlFor="salary">
              Salary
            </label>
            <input
              defaultValue={employee?.salary || ""}
              className="border border-gray-400 px-2 h-12 outline-none rounded-md"
              type="number"
              placeholder="e.g. 500.00"
              {...register("salary", { required: "Salary is required" })}
            />
            <span className="text-red-500">
              {errors?.salary && errors?.salary?.message}
            </span>
          </div>
          <div className="flex flex-col  ">
            <label className="text-lg font-thin mb-2" htmlFor="date paid">
              Date paid
            </label>
            <input
              defaultValue={date_now || ""}
              className="border border-gray-400 px-2 h-12 outline-none rounded-md"
              type="date"
              {...register("date_paid", { required: "Date is required" })}
            />
            <span className="text-red-500">
              {errors?.date && errors?.date.message}
            </span>
          </div>
          <div className="flex gap-4 py-4">
            <button className="bg-slate-500 rounded-md w-36 px-4 py-2 text-lg text-white">
              Cancel
            </button>
            <button
              onClick={handleSubmit(submitForm)}
              className="bg-orange-500 rounded-md text-lg text-white px-4 py-2 w-36"
            >
              {loading ? "loading..." : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeSalary;
