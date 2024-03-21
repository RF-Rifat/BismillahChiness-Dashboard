import useAuth from "../../Hooks/useAuth";
import useGetUserData from "../../Hooks/useGetUserData";
import AccSkeleton from "../../components/DashBoard/Accounts/AccSkeleton";
import AccountData from "../../components/DashBoard/Accounts/AccountData";
import AccountList from "../../components/DashBoard/Accounts/AccountList";

const AccountSetting = () => {
  const { authInfo } = useAuth();
  const { email } = authInfo?.user || {};
  const [data, refetch, isPending] = useGetUserData(`/api/userData/${email}`);
  if (isPending) <AccSkeleton />;
  return (
    <>
      <AccountData data={data} />
      <AccountList userAcc={data?.accounts} />
    </>
  );
};

export default AccountSetting;
