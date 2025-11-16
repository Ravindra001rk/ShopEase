import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../Context/Context";

const Sidebar = () => {
  const { toggleBtn } = useContext(Context);

  return (
    <div>
      <div className="border-r lg:fixed border-gray-400 p-3">
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
        <h1 className="mt-5">Colors</h1>
        <div class="flex gap-1">
          <label class="relative">
            <input
              type="checkbox"
              onChange={toggleBtn}
              value={"Red"}
              class="peer hidden"
            />
            <span class="w-5 h-5 bg-red-500 rounded-full inline-block cursor-pointer peer-checked:opacity-60"></span>
          </label>

          <label class="relative">
            <input
              type="checkbox"
              onChange={toggleBtn}
              value={"Blue"}
              class="peer hidden"
            />
            <span class="w-5 h-5 bg-blue-500 rounded-full inline-block cursor-pointer peer-checked:opacity-60"></span>
          </label>

          <label class="relative">
            <input
              type="checkbox"
              onChange={toggleBtn}
              value="Green"
              class="peer hidden"
            />
            <span class="w-5 h-5 bg-green-500 rounded-full inline-block cursor-pointer peer-checked:opacity-60"></span>
          </label>

          <label class="relative">
            <input
              type="checkbox"
              onChange={toggleBtn}
              value={"Purple"}
              class="peer hidden"
            />
            <span class="w-5 h-5 bg-purple-500 rounded-full inline-block cursor-pointer peer-checked:opacity-60"></span>
          </label>

          <label class="relative">
            <input
              type="checkbox"
              onChange={toggleBtn}
              value={"Yellow"}
              class="peer hidden"
            />
            <span class="w-5 h-5 bg-yellow-400 rounded-full inline-block cursor-pointer peer-checked:opacity-60"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
