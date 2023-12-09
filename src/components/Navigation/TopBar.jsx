import React from "react";
import AVATAR from "../../assets/avator.jpg"

const TopBar = () => {
  return (
    <div className="border-b border-gray-400 w-screen h-16 flex items-center justify-between">
      {/* Search bar */}
      <div className="border w-68 overflow-hidden flex  rounded-full bg-slate-300/90 p-1 ml-4">
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
      <div className="flex bg-slate-400 rounded-md pr-2">
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
  );
};

export default TopBar;
