import React from "react";
import Navbar from "./Navbar";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default SharedLayout;
