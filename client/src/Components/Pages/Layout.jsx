import react from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <react.Fragment>
      <Navbar />
      <Outlet />
    </react.Fragment>
  );
};
export default Layout;
