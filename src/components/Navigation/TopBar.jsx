import { useState, useContext } from "react";
import AVATAR from "../../assets/avator.jpg";
import LOGO from "../../assets/FreezeHavenLogo.png";
import FREEZER from "../../assets/Freezer.png";
import SaleCard from "../UtilityComponent/SaleCard";
import Context from "../../context/context";
import { toast } from "react-toastify";

const TopBar = ({ setUpCollapse }) => {
  const [collapse, setCollapse] = useState(false);
  const { cart, setShowBag } = useContext(Context);

  const toggleCollapse = (state) => {
    setCollapse(state);
    setUpCollapse(state);
  };

  const showBagWhenNotEmpty = () => {
    if (!cart?.length) {
      toast.warn("Select an item to checkout", {
        theme: "colored",
      });
      return;
    }
    setShowBag(true);
  };

  return (
    <div className="border-b fixed w-full  z-50 bg-white  border-gray-400 h-16 flex items-center ">
      <div
        className={`border-r ${
          collapse ? "w-64" : " w-20 flex px-1"
        } border-gray-400 text-2xl font-extrabold h-16 flex justify-center items-center`}
      >
        {collapse ? (
          <img className=" w-36" src={LOGO} alt="" />
        ) : (
          <img className=" w-8" src={FREEZER} alt="" />
        )}
        <div
          className={`relative  ${
            collapse ? "left-14" : " left-5"
          } cursor-pointer`}
        >
          {!collapse ? (
            <div
              onClick={() => toggleCollapse(!false)}
              className=" flex justify-center items-center px-1 py-1 rounded-full bg-orange-500 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={() => toggleCollapse(!true)}
              className=" flex justify-center items-center px-1 py-1 rounded-full bg-orange-500 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center flex-1 justify-between px-4">
        {/* Search bar */}
        <div className="w-68 overflow-hidden flex  rounded-full bg-[#F6F7F8] p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="w-full border-none outline-none bg-transparent pl-2 text-"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Avatar */}
        <div className="flex items-center ">
          <div
            onClick={showBagWhenNotEmpty}
            className=" cursor-pointer flex px-1 py-2 justify-center items-center  bg-[#F6F7F8] rounded-full mr-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="relative  z-50 -top-3 right-0 border text-sm border-red-500 bg-orange-500 text-white rounded-full w-5 h-5 flex justify-center">
              {cart?.length}
            </span>
          </div>
          <div className="flex  rounded-md pr-2">
            <img className=" w-12 h-auto mr-1" src={AVATAR} alt="avator" />
            <div>
              <h1 className="flex">
                Cole Baidoo{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </h1>
              <p className="font-semibold">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
