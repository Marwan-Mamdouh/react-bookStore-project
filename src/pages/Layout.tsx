import Footer from "../components/footer";
import NavBar from "../components/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
