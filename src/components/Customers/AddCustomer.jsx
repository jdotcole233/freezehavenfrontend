import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddCustomer = ({ closeModal, rowData, setRowData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const submitCustomerForm = (data) => {
    console.log(data);
    let url = "http://127.0.0.1:8000/api/customers";
    let method = "POST";
    let body = JSON.stringify(data);

    if (Object.keys(rowData).length) {
      url = url + `/${rowData.id}`;
      method = "PUT";
    }

    setLoading(true);

    fetch(url, {
      method,
      body,
      headers: {
        "Content-type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        setLoading(false);
        toast.success(response.message);
        closeModal(false);
      })
      .catch((err) => {
        setLoading(false);
        closeModal(false);
        toast.warn("Failed to add customers..");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="fixed flex justify-center z-50 items-center py-4 top-0 left-0 bg-black/25 w-full h-full">
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

        <div className="flex flex-col gap-3 px-4">
          <div className="w-full ">
            <label className="text-lg font-thin mb-2" htmlFor="Customer Name">
              Customer Name
            </label>
            <input
              defaultValue={rowData?.name || ""}
              {...register("name")}
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
                defaultValue={rowData?.phone_number || ""}
                {...register("phone_number", {
                  required: "Customer phone number is required",
                })}
                className="border px-2  outline-none h-12 rounded-md w-full"
                type="tel"
                placeholder="E.g. 0503848414"
              />
              <span className="text-red-500">
                {errors?.phone_number && errors?.phone_number?.message}
              </span>
            </div>
            <div className="w-full ">
              <label className="text-lg font-thin mb-2" htmlFor="Location">
                Location
              </label>
              <input
                defaultValue={rowData?.location}
                {...register("location", {
                  required: "Customer location is required",
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

          <div className="flex gap-4 py-4">
            <button className=" bg-slate-500 px-4 py-2 w-36 text-lg text-white rounded-md ">
              Cancel
            </button>
            <button
              onClick={handleSubmit(submitCustomerForm)}
              className=" bg-orange-500 px-4 py-2 w-36 text-lg text-white rounded-md "
            >
              {loading ? (
                "loading..."
              ) : (
                <span>{Object.keys(rowData).length ? "Update" : "Add"}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
