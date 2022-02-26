import React, { useState } from "react";
import { ProductModal } from "..";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={`main-layout ${darkmode ? "darkmode" : ""}`}>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      {children}
      <Footer />
      <ProductModal />
    </div>
  );
};

export default Layout;
