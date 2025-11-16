import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as assets from "../assets/frontend_assets";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../Context/Context";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

const NavBar = () => {
  const [ShowSearch, setShowSearch] = useState(false);
  const [Search, setSearch] = useState("");
  const [filtered, setfiltered] = useState([]);
  const { products, currency, cart, favourite } = useContext(Context);
  const [visible, setVisible] = useState(false);
  const [showCat, setShowCat] = useState(false);

  const HandleClick = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setfiltered([]);
      setShowSearch(true);
    } else {
      const results = products
        .filter((item) =>
          item.ProductTitle.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      setfiltered(results);
      setShowSearch(true);
    }
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalFavItems = favourite.reduce((total, item) => total + item.quantity, 0);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className={`block md:hidden absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden z-50 ${
          visible ? "w-full" : "w-0"
        }`}
        style={{ transitionProperty: "width", transitionDuration: "250ms" }}
        aria-hidden={!visible}
      >
        <div className="p-4 mb-5 bg-black" onClick={() => setVisible(false)}>
          <button
            className="text-2xl items-center text-white  flex"
            onClick={() => setVisible(false)}
            aria-label="Close"
          >
            <IoIosArrowBack />
            Back
          </button>
        </div>

        <div
          className={`px-4 flex flex-col gap-3 ${visible ? "block" : "hidden"}`}
        >
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className={({ isActive }) =>
              ` text-black text-2xl font-semibold
                ${isActive ? "text-orange-500 font-semibold" : ""}`
            }
          >
            <h1 className="relative home">Home</h1>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className={({ isActive }) =>
              ` text-black text-2xl font-semibold
                ${isActive ? "text-orange-500 font-semibold" : ""}`
            }
          >
            <h1 className="relative home">Collection</h1>
          </NavLink>
          <NavLink className="text-2xl font-semibold">
            <div className=" flex justify-between">
              <h1 className="relative home">Category</h1>
              <h1 onClick={() => setShowCat(!showCat)}>
                <IoIosArrowDown />
              </h1>
            </div>
            <div className={`ml-4 ${showCat ? "block" : "hidden"}`}>
              <Link to="/collection/men" onClick={() => setVisible(false)}>
                <h1 className="p-1 text-xl  home w-full cursor-pointer">Men</h1>
              </Link>
              <Link to="/collection/women" onClick={() => setVisible(false)}>
                <h1 className="p-1 text-xl home  cursor-pointer">Women</h1>
              </Link>
              <Link to="/collection/kids" onClick={() => setVisible(false)}>
                <h1 className="p-1 text-xl home cursor-pointer">Kids</h1>
              </Link>
            </div>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className={({ isActive }) =>
              ` text-black text-2xl font-semibold
                ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-black font-semibold"
                }`
            }
          >
            <h1 className="relative home">About</h1>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className={({ isActive }) =>
              ` text-black text-2xl font-semibold
                ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-black font-semibold"
                }`
            }
          >
            <h1 className="relative home">Contact</h1>
          </NavLink>
        </div>
      </div>

      <nav className="fixed w-full top-0 left-0 md:px-17 px-5 bg-[#eff3ed] z-220 ">
        <div className="flex relative justify-between items-center py-7">
          <div>
            <Link to="/">
              <h1 className="md:text-3xl text-2xl cursor-pointer">
                SHOP<span className="text-orange-400">EASE</span>
              </h1>
            </Link>
          </div>
          <div className="md:flex hidden gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` text-black font-semibold
                ${isActive ? "text-orange-500 font-semibold" : ""}`
              }
            >
              <h1 className="relative home">Home</h1>
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                ` text-black font-semibold 
                ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-black font-semibold"
                }`
              }
            >
              <h1 className="relative home">Collection</h1>
            </NavLink>
            <div className="flex items-center relative group">
              <h1 className="flex items-center cursor-pointer text-black font-semibold">
                Category <IoIosArrowDown className="mt-1 relative home" />
              </h1>
              <div className="absolute top-7 left-0  h-0 overflow-hidden w-30 transition-all duration-200 ease-in-out  group-hover:h-32">
                <ul className="flex flex-col bg-[#eff3ed] text-black font-semibold shadow-lg border border-[#d1cccc] p-2 rounded-md ">
                  <Link to="/collection/men">
                    <li className="p-1 relative home w-full cursor-pointer">
                      Men
                    </li>
                  </Link>
                  <Link to="/collection/women">
                    <li className="p-1 relative home  cursor-pointer">Women</li>
                  </Link>
                  <Link to="/collection/kids">
                    <li className="p-1 relative home cursor-pointer">Kids</li>
                  </Link>
                </ul>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` text-black font-semibold
                ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-black font-semibold"
                }`
              }
            >
              <h1 className="relative home">About</h1>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` text-black font-semibold
                ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-black font-semibold"
                }`
              }
            >
              <h1 className="relative home">Contact</h1>
            </NavLink>
          </div>

          <div className="flex md:relative items-center gap-3">
            <div
              className={`${
                ShowSearch ? "block" : "hidden"
              }  w-100 border rounded-xl absolute left-0  top-20 md:top-0 h-[40%] md:relative flex items-center bg-white md:bg-transparent p-1`}
            >
              <div className="flex items-center w-full">
                <img src={assets.search_icon} className="w-5" />
                <input
                  onInput={(e) => {
                    HandleClick(e);
                  }}
                  type="text"
                  value={Search}
                  placeholder="Search..."
                  className="h-full w-full outline-0 p-1 "
                />
              </div>

              {Search && (
                <div
                  ref={searchRef}
                  className="absolute border-[#c0bbbb] -z-500 md:top-10 top-8 left-0  p-3 w-full bg-white border shadow-xl"
                >
                  {filtered.length > 0 ? (
                    filtered.map((item) => (
                      <Link
                        to={`/product/${item.ProductId}`}
                        onClick={() => setShowSearch(false)}
                      >
                        <div className="flex gap-4 border-b border-[#c0bbbb] pb-1 mb-2">
                          <img src={item.ImageURL} className="w-9" />
                          <div>
                            <h1 className="text-[15px]">{item.ProductTitle}</h1>
                            <h1 className="text-[15px] text-red-600">
                              {currency}
                              {item.Price}
                            </h1>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div>No results found</div>
                  )}
                </div>
              )}
            </div>

            <img
              onClick={() => {
                setShowSearch(!ShowSearch);
                setSearch("");
              }}
              src={assets.search_icon}
              alt="About"
              className="w-5 cursor-pointer"
            />
            <div className="relative cursor-pointer">
              <Link to="favourite">
                <CiHeart className="text-3xl text-black" />
                <p className="absolute -top-1 px-1 py-0.5 -right-2 bg-black text-[10px] rounded-full text-white">
                 {totalFavItems}
                </p>
              </Link>
            </div>
            <div className="relative">
              <Link to="/cart">
                <img
                  src={assets.cart_icon}
                  alt="About"
                  className="w-5 cursor-pointer"
                />
                <p className="absolute -top-1 px-1 py-0.5 -right-2 bg-black text-[10px] rounded-full text-white">
                  {totalItems}
                </p>
              </Link>
            </div>
            <CiMenuFries
              className="md:hidden "
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
