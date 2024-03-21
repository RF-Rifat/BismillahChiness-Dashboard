/* eslint-disable react/prop-types */
import { createContext } from "react";
import useGetData from "../Hooks/useGetData";
import useAuth from "../Hooks/useAuth";
export const AdminDataContext = createContext(null);
const AdminProvider = ({ children }) => {
  const [userData] = useGetData("/api/user");
  const [userAccData] = useGetData("/api/account");
  const { authInfo } = useAuth();
  const { email } = authInfo?.user || {};
  const LoggedUser = userData?.filter((admin) => admin?.email == email);
  const userAcc = userAccData.filter(
    (account) => account.userId === LoggedUser[0]?._id
  );
  const isAdmin = LoggedUser?.some((item) => item.position === "Admin");
  const AdminAuth = {
    LoggedUser,
    isAdmin,
    userAcc,
  };
  return (
    <AdminDataContext.Provider value={AdminAuth}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminProvider;
