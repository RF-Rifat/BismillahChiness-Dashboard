import { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthProvider";


const useAuth = () => {
   const authInfo = useContext(AuthProvider);

   if (authInfo.user === null) {
      return false
   }

   return { authInfo };
};
// { user, loading, createUser, login, updateUserProfile }
export default useAuth;