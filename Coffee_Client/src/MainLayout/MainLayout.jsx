import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nabvar from "../Components/Nabvar";

const MainLayout = () => {
  return (
    <div className="rancho">
      <Nabvar></Nabvar>
      <div className="w-[80%] mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
