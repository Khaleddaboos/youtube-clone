import React from "react";
import { categories } from "../data";

const Sidebar = ({ chosenItem, setChosenItem }) => {
  return (
    <aside className="sticky top-20 flex z-10 bg-black overflow-y-auto  px-4 border-[#3d3d3d] md:h-[92vh] md:overflow-visible md:border-r-[1px] ">
      {/* #FC1503 */}
      <div className="flex flex-row scroll-smooth md:overflow-auto md:flex-col">
        {categories.map((item, index) => {
          return (
            <button
              key={index}
              className={`category-btn flex items-center w-full my-3 px-10 md:py-3 rounded-full ${
                chosenItem === item.name ? "bg-[#FC1503]" : "bg-black"
              } hover:bg-[#FC1503] `}
              onClick={() => setChosenItem(item.name)}
            >
              <span
                className={`span inline-block text-xl ${
                  chosenItem === item.name ? "text-whote" : "text-[#FC1503]"
                } mr-5`}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
            </button>
          );
        })}
      <p className="text-sm hidden md:block">Copyright © 2024 Khaled Gamal</p>
      </div>

    </aside>
  );
};

export default Sidebar;
