import SADIA from "../../assets/Sadia_sausage.png";

const SaleCard = () => {
  return (
    <div className="border overflow-hidden flex flex-col border-gray-200 shadow-sm w-64 h-80 rounded-md">
      <div
        style={{
          backgroundImage: `url(${SADIA})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
        className="h-52"
      ></div>
      <div className="px-2 flex flex-col">
        <p className="text-xl text-center font-semibold">Product Name</p>
        <p className="text-center py-1 text-md font-thin text-green-500 uppercase">In-stock</p>
        <button className="py-1 text-xl rounded-md bg-orange-400 text-white shadow-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default SaleCard;
