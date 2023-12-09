import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationItems } from "../../assets/data";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className="flex flex-col border border-gray-400 h-screen w-64">
      <div className="border-b border-gray-400 text-2xl font-bold h-16 flex justify-center items-center">
        FreezeHaven
      </div>
      <nav className="flex flex-col  px-4 pt-2   ">
        {navigationItems.map((navigationItem, key) => (
          <Link
            onClick={() => setActiveLink(key)}
            className={`${
              key === activeLink ? "bg-orange-400 text-white" : ""
            } flex items-center mb-1  py-3 rounded-md px-2 hover:bg-orange-400 hover:text-white`}
            key={key}
            to={navigationItem.path}
          >
            {navigationItem.icon}
            <span className="px-2 font-semibold">{navigationItem.title} </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
