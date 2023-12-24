import { useState, useContext } from "react";
import SADIA from "../../assets/Sadia_sausage.png";
import Context from "../../context/context";
import { stock } from "../../assets/data";
import { toast } from "react-toastify";

const SaleCard = ({ product }) => {
  const [addCart, setAddCart] = useState(0);
  const { cart, setAddToCart } = useContext(Context);

  const addToBag = (product) => {
    if (cart?.includes(product))
    {
      toast.warn(product?.product_name + " is already in the bag")
      return;
    }
    setAddToCart(product);
  };

  return (
    <div className="border overflow-hidden flex flex-col border-gray-200 shadow-sm flex-1 h-80 rounded-md">
      <div
        style={{
          backgroundImage: `url(${SADIA})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="h-52"
      ></div>
      <div className="px-2 flex flex-col justify-center items-center">
        <p className="text-lg text-center font-semibold">
          {product?.product_name}
        </p>
        {/* <p>{addCart}</p> */}
        <span
          className={`text-center px-2 text-sm text-white  rounded-full text-md font-thin ${
            product?.status === "OUT_OF_STOCK" ? "bg-red-500" : "bg-green-500"
          } uppercase`}
        >
          {stock[product?.status]}
        </span>
        <button
          disabled={product?.status === "OUT_OF_STOCK"}
          onClick={() => addToBag(product)}
          className={`py-1 w-full mt-1 mb-1 text-xl rounded-md ${
            product?.status === "OUT_OF_STOCK"
              ? "bg-slate-400"
              : "bg-orange-400"
          }  text-white shadow-sm`}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default SaleCard;
