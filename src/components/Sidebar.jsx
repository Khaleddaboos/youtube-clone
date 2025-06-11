import React from "react";
import { categories } from "../data";

const Sidebar = ({ chosenItem, setChosenItem }) => {
  return (
    <aside className="scroll-horizontal sticky top-24  overflow-auto flex flex-row px-4 border-[#3d3d3d] md:h-[92vh] md:border-r-[1px] md:flex-col">

{/* #FC1503 */}
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
        
    </aside>
  );
};

export default Sidebar;
