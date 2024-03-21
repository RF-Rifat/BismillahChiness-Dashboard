import { MdOutlineBarChart } from "react-icons/md";
import { FcDataSheet } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import MyWalletForm from "./MyWalletForm";
import useAuth from "../../Hooks/useAuth";
import useGetData from "../../Hooks/useGetData";
import useGetUserData from "../../Hooks/useGetUserData";

const MyWallet = () => {
  const { authInfo } = useAuth();
  const { displayName, photoURL, email } = authInfo?.user || {};
  const [data, refetch] = useGetUserData(`/api/userData/${email}`);
  console.log(data);

  return (
    <>
      <div className="px-3 relative sm:px-4 xxxl:px-6 py-6 lg:py-8 duration-300 false false">
        <div className="false false">
          <div className="grid grid-cols-12 gap-4 xxl:gap-6">
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Total Income</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>

                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <MdOutlineBarChart className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$8500 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-primary">
                    <i className="las la-arrow-up text-lg" /> 35.7%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Total Spending</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <FcDataSheet className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$3500 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-secondary1">
                    <i className="las la-arrow-up text-lg" /> 45.2%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Spending Goal</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <FcPieChart className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$9254 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-secondary2">
                    <i className="las la-arrow-up text-lg" /> 25.7%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Total Transactions</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <FcLineChart className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$17000 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-secondary3">
                    <i className="las la-arrow-up text-lg" /> 50.7%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form section */}
      <MyWalletForm />
    </>
  );
};

export default MyWallet;
