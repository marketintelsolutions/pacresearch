import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SharedLayout;
