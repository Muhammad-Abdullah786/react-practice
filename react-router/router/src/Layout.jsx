import React from "react";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
