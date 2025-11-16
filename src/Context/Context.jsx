import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const currency = "$";

  const toggleBtn = (e) => {
    const value = e.target.value;
    setSelectedColors((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    if (selectedColors.length > 0) {
      setFilteredProducts(
        products.filter((item) => selectedColors.includes(item.Colour))
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedColors]);

  // -----------------------cart------------------------

  const addtoCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.ProductId === product.ProductId
      );

      if (existing) {
        return prevCart.map((item) =>
          item.ProductId === product.ProductId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increment = (ProductId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.ProductId === ProductId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (ProductId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.ProductId === ProductId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const deletItem = (ProductId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.ProductId !== ProductId)
    );
  };

  // -----------------------cart------------------------

  // -----------------------Favourite------------------------

  const favItems = (product) => {
    setFavourite((prevFav) => {
      const existingFav = prevFav.find(
        (item) => item.ProductId === product.ProductId
      );
      if (existingFav) {
        return prevFav.map((item) =>
          item.ProductId === product.ProductId
            ? { ...item, quantity: item.quantity }
            : item
        );
      }
      return [...prevFav, { ...product, quantity: 1 }];
    });
  };

  const deletFav = (ProductId) => {
    setFavourite((prevFav) =>
      prevFav.filter((item) => item.ProductId !== ProductId)
    );
  };

  // -----------------------Favourite------------------------

  const value = {
    products: filteredProducts,
    currency,
    selectedColors,
    toggleBtn,
    setFilteredProducts,
    filteredProducts,
    products,
    cart,
    setCart,
    addtoCart,
    favItems,
    setFavourite,
    favourite,
    increment,
    deletItem,
    decrement,
    deletFav,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
