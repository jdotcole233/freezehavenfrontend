import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProductDetails = ({ closeModal, product, product_id }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.table(product?.id);
  const [profit, setProfit] = useState(product?.profit_or_loss || 0);
  const [income, setIncome] = useState(product?.total_income || 0);
  const [totalWeight, setTotalWeight] = useState(product?.weight || 0);
  const [totalCost, setTotalCost] = useState(product?.cost_price || 0);
  const [loading, setLoading] = useState(false);

  const calculate_cost_price = () => totalCost / product?.quantity || 0;
  const calculate_weight_per_box = () => totalWeight / product?.quantity || 0;

  const submitProductDetailsForm = (data) => {
    let url = "http://127.0.0.1:8000/api/product_details";
    let method = "POST";

    data["profit_or_loss"] = profit;
    data["total_income"] = income;
    data["cost_price"] = totalCost;
    data["weight"] = totalWeight;
    data["product_id"] = product_id;

    delete data["profit"];
    delete data["income"];
    delete data["cost_per_box"];
    delete data["total_weight"];

    // console.log(data);

    if (Object.keys(product).length) {
      url = url + `/${product.id}`;
      method = "PUT";
    }

    let body = JSON.stringify(data);

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
        toast.warn("Failed to add product details...");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const subscription = watch((data) => {
      // Total weight, Total cost, Income, profit
      console.log(data);
      if (data?.weight && data?.quantity && data?.cost_per_box) {
        const total_weight = data?.weight * data?.quantity;
        setTotalWeight(total_weight);
        const total_cost = data?.quantity * data?.cost_per_box;
        setTotalCost(total_cost);
        const income = total_weight * data?.unit_price;
        setIncome(income);
        const profit = income - total_cost;
        setProfit(profit);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

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
                Weight per box (kg)
              </label>
              <input
                {...register("weight", {
                  required: "Weight is required",
                })}
                className=" w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="e.g. 10kg"
                defaultValue={calculate_weight_per_box() || 0}
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
                {...register("quantity", {
                  required: "Quantity is required",
                })}
                className="w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="2"
                defaultValue={product?.quantity || "0"}
              />
              <span className="text-red-500">
                {errors?.quantity && errors?.quantity?.message}
              </span>
            </div>
          </div>

          <div className="flex w-[850px items-center justify-between">
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="Cost per box">
                Cost per box (&#8373;)
              </label>
              <input
                {...register("cost_per_box", {
                  required: "Cost per box is required",
                })}
                className="w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="2"
                defaultValue={calculate_cost_price() || 0}
              />
              <span className="text-red-500">
                {errors?.cost_per_box && errors?.cost_per_box?.message}
              </span>
            </div>
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="unit price">
                Unit Price (&#8373;)
              </label>
              <input
                {...register("unit_price", {
                  required: "Enter unit price",
                })}
                className="w-96 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                placeholder="20.00"
                defaultValue={product?.unit_price}
              />
              <span className="text-red-500">
                {errors?.unit_price && errors?.unit_price?.message}
              </span>
            </div>
          </div>

          <div className="flex w-[850px] items-center justify-between">
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="cost price">
                Total Cost Price (&#8373;)
              </label>
              <input
                // {...register("total_cost_price", {
                //   required: "Cost price is required",
                // })}
                className="bg-lime-700 text-white w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                // placeholder="100.00"
                // defaultValue={totalCost}
                value={totalCost}
                readOnly
              />
              {/* <span className="text-red-500">
                {errors?.cost_price && errors?.cost_price?.message}
              </span> */}
            </div>

            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="weight">
                Total Weight (kg)
              </label>
              <input
                {...register("total_weight", {
                  required: "Weight is required",
                })}
                className="bg-lime-700 text-white w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                // placeholder="e.g. 10kg"
                value={totalWeight}
                readOnly
              />
              {/* <span className="text-red-500">
                {errors?.weight && errors?.weight?.message}
              </span> */}
            </div>

            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="Total Income">
                Total Income (&#8373;)
              </label>
              <input
                {...register("income")}
                className="bg-lime-700 text-white w-48 border border-gray-400 px-2 h-12 outline-none rounded-md"
                type="number"
                // placeholder="20.00"
                value={income}
                defaultValue={income}
              />
            </div>
            <div className="flex flex-col  ">
              <label className="text-lg font-thin mb-2" htmlFor="profit">
                Profit (&#8373;)
              </label>
              <input
                {...register("profit")}
                className={`w-48 text-white border border-gray-400 px-2 h-12 outline-none rounded-md ${
                  profit < 0 ? "bg-red-700" : "bg-lime-700"
                } `}
                type="number"
                // placeholder="20.00"
                value={profit}
                defaultValue={profit}
              />
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <button className="bg-slate-500 rounded-md w-36 px-4 py-2 text-lg text-white">
              Cancel
            </button>
            <button
              onClick={handleSubmit(submitProductDetailsForm)}
              className="bg-orange-500 rounded-md text-lg text-white px-4 py-2 w-36"
            >
              {loading ? (
                "loading..."
              ) : (
                <span>{Object.keys(product).length ? "Edit" : "Add"}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDetails;
