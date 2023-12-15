import { useState, useContext } from "react";
import SADIA from "../../assets/Sadia_sausage.png";
import Context from "../../context/context";

const SaleCard = () => {
  const [addCart, setAddCart] = useState(0);
  const { setAddToCart } = useContext(Context)

  return (
    <div className="border overflow-hidden flex flex-col border-gray-200 shadow-sm w-52 h-80 rounded-md">
      <div
        style={{
          backgroundImage: `url(${SADIA})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: 'no-repeat'
        }}
        className="h-52"
      ></div>
      <div className="px-2 flex flex-col">
        <p className="text-xl text-center font-semibold">Product Name</p>
        {/* <p>{addCart}</p> */}
        <p className="text-center py-1 text-md font-thin text-green-500 uppercase">In-stock</p>
        <button onClick={() => setAddToCart({})} className="py-1 text-xl rounded-md bg-orange-400 text-white shadow-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default SaleCard;
