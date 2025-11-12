import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="border-r fixed border-gray-400 p-3">
        <h1 className="font-semibold text-2xl mb-2"> Categories</h1>
        <div className="ml-3 space-y-1">
          <NavLink
            to="/collection/men"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <h1>Men</h1>
          </NavLink>
          <NavLink
            to="/collection/women"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
           <h1>Women</h1>
          </NavLink>
          <NavLink
            to="/collection/kids"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
           <h1>Kids</h1>
          </NavLink>
          <NavLink
            to="/collection/topwear"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
           <h1>Topwear</h1>
          </NavLink>
          <NavLink
            to="/collection/bottom"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <h1>Bottom</h1>
          </NavLink>
          <NavLink
            to="/collection/footwear"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <h1>Footwear</h1>
          </NavLink>
          <NavLink
            to="/collection/casual"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-black"
            }
          >
            <h1>Casual</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
