import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationItems } from "../../assets/data";

const SideBar = ({ collapse }) => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="flex flex-col border-r border-gray-400 h-full">
      <nav className={`flex flex-col  ${ collapse ? 'px-4' : 'w-20 px-2 items-center'} pt-2`}>
        <div>
          {navigationItems.map((navigationItem, key) => (
            <Link
              onClick={() => setActiveLink(key)}
              className={`${
                key === activeLink ? "bg-orange-100/80 text-orange-500" : ""
              } flex items-center mb-1 text-[#67748E]  py-3 rounded-md px-2 hover:text-orange-400 `}
              key={key}
              to={navigationItem.path}
            >
              {navigationItem.icon}
              <span className="px-2 font-semibold">
                {
                  collapse && navigationItem.title
                }
              </span>
            </Link>
          ))}
        </div>
        <button className="border-t flex text-[#67748E] font-semibold py-6 text-lg items-center px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          {
            collapse && 'Logout'
          }
        </button>
      </nav>
    </div>
  );
};

export default SideBar;
