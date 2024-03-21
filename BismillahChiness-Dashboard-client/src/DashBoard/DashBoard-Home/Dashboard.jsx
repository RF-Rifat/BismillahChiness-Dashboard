import { useContext } from "react";
import BarChart from "./BarChart";
import { DashboardTimeLine } from "./DashBoardTimeline";
import { AdminDataContext } from "../../Context/AdminProvider";
import useGetData from "../../Hooks/useGetData";
import NumberCount from "../../Shared/NumberCount";

const Dashboard = () => {
  const authInfo = useContext(AdminDataContext);
  const { LoggedUser, isAdmin } = authInfo;
  const [userData] = useGetData("/api/user");
  const [accData] = useGetData("/api/account");
  const [creditCard] = useGetData("/api/credit");
  // console.log(creditCard);
  const totalBalance = accData?.reduce((sum, user) => sum + user.balance, 0);

  return (
    <>

      {isAdmin && (
        <>
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-transparent hover:drop-shadow-2xl dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <div className="p-4 flex items-center">
                <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    
                    <NumberCount number={userData?.length} />
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-transparent hover:drop-shadow-2xl dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <div className="p-4 flex items-center">
                <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Accounts
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    <NumberCount number={accData?.length}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-transparent hover:drop-shadow-2xl dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <div className="p-4 flex items-center">
                <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Credit Cards
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    <NumberCount number={creditCard?.length}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-transparent hover:drop-shadow-2xl dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <div className="p-4 flex items-center">
                <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Balance
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                   <NumberCount number={totalBalance}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-transparent hover:drop-shadow-2xl dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <div className="p-4 flex items-center">
                <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Transactions
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    <NumberCount number={10}/>
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-transparent hover:drop-shadow-2xl dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <div className="p-4 flex items-center">
                <div className="p-3 rounded-full text-red-500 dark:text-red-100 bg-red-100 dark:bg-red-500 mr-4">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 5a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h8zm-1 2H6v6h8V7zm-4 8a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total Loans
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                   <NumberCount number={13}/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="grid w-full lg:grid-cols-2 justify-center items-center gap-10">
        <BarChart />
        <DashboardTimeLine />
      </div>
    </>
  );
};

export default Dashboard;
