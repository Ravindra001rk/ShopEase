import React, { createContext, useState } from "react";
import { products } from "../assets/frontend_assets";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const currency = "$";
  const value = {
    products,
    currency
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
