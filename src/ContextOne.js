import React, { createContext } from "react";

export const Context = createContext();

const ContextProvider = props => {
  const bgYellow = () => {
    console.log("okok");
  };
  return <Context.Provider value={bgYellow}>{props.children}</Context.Provider>;
};

export default ContextProvider;
