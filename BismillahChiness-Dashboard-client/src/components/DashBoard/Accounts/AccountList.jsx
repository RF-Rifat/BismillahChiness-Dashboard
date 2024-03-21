/* eslint-disable react/prop-types */
import { FcCurrencyExchange, FcMoneyTransfer } from "react-icons/fc";
import { Chip, Button } from "@material-tailwind/react";
import AccSkeleton from "./AccSkeleton";
const AccountList = ({ userAcc }) => {
  console.log(userAcc);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full max-w-full px-3 mt-6 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
              <h6 className="mb-0 dark:text-white">Accounts Information</h6>
            </div>
            <div className="flex-auto p-4 pt-6">
              <ul className="grid lg:grid-cols-2 gap-3 pl-0 mb-0 rounded-lg">
                {!userAcc?.length > 0 ? (
                  <AccSkeleton />
                ) : (
                  userAcc?.map((item) => (
                    <li
                      key={item?._id}
                      className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 dark:bg-slate-850"
                    >
                      <div className="flex flex-col gap-2">
                        <h6 className="mb-4 text-sm leading-normal dark:text-white">
                          {item?.name}
                        </h6>
                        <span className="mb-2 text-xs leading-tight dark:text-white/80">
                          Account Id:{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item?.accountId}
                          </span>
                        </span>
                        <span className="mb-2 text-xs leading-tight dark:text-white/80">
                          Account Type:{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item?.accountType}
                          </span>
                        </span>
                        <span className="text-xs leading-tight dark:text-white/80">
                          Balance:{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item?.balance}
                          </span>
                        </span>
                        <span className="text-xs flex leading-tight dark:text-white/80">
                          Status :{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item?.status === "pending" ? (
                              <Chip
                                color="blue"
                                value="pending"
                                className="rounded-full"
                                size="sm"
                              />
                            ) : item?.status === "approved" ? (
                              <Chip
                                color="green"
                                value="Accepted"
                                className="rounded-full"
                                size="sm"
                              />
                            ) : (
                              <Chip
                                color="red"
                                value="declined"
                                className="rounded-full"
                                size="sm"
                              />
                            )}
                          </span>
                        </span>
                      </div>
                      <div className="ml-auto text-right grid place-items-center">
                        <div className="text-sm">
                          Date:
                          {new Date(item?.createdAt).toLocaleString("en-US", {
                            timeZone: "Asia/Dhaka",
                          })}
                        </div>
                        <Button
                          variant="outlined"
                          className="relative z-10 inline-block px-4 py-2.5 mb-0 font-bold text-center text-transparent align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text"
                        >
                          <FcMoneyTransfer
                            className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 text-orange-600 bg-x-25 bg-clip-text "
                            aria-hidden="true"
                          />
                          Withdraw
                        </Button>
                        <Button
                          variant="outlined"
                          className="inline-block dark:text-white px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700"
                        >
                          <FcCurrencyExchange
                            className="mr-2 fas fa-pencil-alt text-slate-700"
                            aria-hidden="true"
                          />
                          Deposit
                        </Button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountList;
