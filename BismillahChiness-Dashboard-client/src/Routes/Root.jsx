import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";

import { useContext } from "react";

import ChatBox from "../components/ChatBox";
import { AuthProvider } from "../Authentication/AuthProvider";
import { AdminDataContext } from "../Context/AdminProvider";

const Root = () => {
  const authInfo = useContext(AuthProvider);
  const AdminAuth = useContext(AdminDataContext);
  const { isAdmin } = AdminAuth;

  return (
    // toggle theme bg color
    <div className="dark:bg-dark dark:text-darkText">
      <ComplexNavbar />
      <Outlet></Outlet>
      <Footer />
      {authInfo.user && !isAdmin && <ChatBox />}
    </div>
  );
};

export default Root;
