/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import MasterCard from "../../../../public/masterCard.json";
import { Button } from "@material-tailwind/react";
import { BsTicketDetailed } from "react-icons/bs";

const AccountData = ({ data }) => {
  const filterAcc = data?.accounts?.filter(
    (item) => item.accountType === "Saving"
  );
  const savingBalance = data?.accounts
    ?.filter((card) => card?.accountType === "Saving")
    ?.reduce((total, card) => total + card?.balance, 0);
  const totalBalance = data?.accounts
    ?.filter(
      (card) =>
        card?.accountType === "Checking" || card?.accountType === "Money Market"
    )
    .reduce((total, card) => total + card?.balance, 0);

  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 mb-6 xl:mb-0 xl:w-1/2 xl:flex-none">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      // backgroundImage:
                      //   'url("")',
                      backgroundColor: "#3399EE",
                    }}
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 opacity-80" />
                    <div className="relative z-10 flex-auto p-4">
                      <i
                        className="p-2 text-white fas fa-wifi"
                        aria-hidden="true"
                      />
                      <h5 className="pb-2 mt-6 mb-12 text-white">
                        4562&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                      </h5>
                      <div className="flex">
                        <div className="flex">
                          <div className="mr-6">
                            <p className="mb-0 text-sm leading-normal text-white opacity-80">
                              Card Holder
                            </p>
                            <h6 className="mb-0 text-white">{data[0]?.name}</h6>
                          </div>
                          <div>
                            <p className="mb-0 text-sm leading-normal text-white opacity-80">
                              Expires
                            </p>
                            <h6 className="mb-0 text-white">11/22</h6>
                          </div>
                        </div>
                        <div className="flex items-end justify-end w-1/5 ml-auto">
                          <Lottie animationData={MasterCard} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none ">
                    <div className="relative flex-col min-w-0 break-words bg-white  border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:bg-dark dark:shadow-blue-gray-800 rounded-2xl bg-clip-border grid place-items-center">
                      <div className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <div className="w-16 h-16 text-center grid place-items-center shadow-sm icon bg-gradient-to-tl from-blue-400 to-blue-600 rounded-xl">
                          <i
                            className="relative text-xl leading-none text-white opacity-100 fas fa-landmark top-31/100"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center dark:text-white">
                          Saving Account
                        </h6>
                        <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                          Your Savings Balance
                        </span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <h5 className="mb-0 dark:text-white">
                          ${savingBalance}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                    <div className="relative  flex-col min-w-0 break-words bg-white dark:bg-dark dark:shadow-blue-gray-800 border-0 border-transparent border-solid shadow-xl grid place-items-center dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                      <div className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl  border-b-transparent">
                        <div className="w-16 h-16 text-center bg-center shadow-sm icon  grid place-items-center bg-gradient-to-tl from-blue-400 to-blue-600 rounded-xl">
                          <i
                            className="relative text-xl leading-none text-white opacity-100 fab fa-paypal top-31/100"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center dark:text-white">
                          Market Money
                        </h6>
                        <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                          You can Spend
                        </span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <h5 className="mb-0 dark:text-white">
                          ${totalBalance}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-3 w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white dark:bg-dark dark:shadow-blue-gray-800 border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <div className="flex flex-wrap justify-between w-full">
                      <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                        <h6 className="mb-0 dark:text-white">Payment Method</h6>
                      </div>
                      <Button
                        color="blue"
                        className="flex-none justify-items-end text-right"
                      >
                        <a>
                          {" "}
                          <i className="fas fa-plus" aria-hidden="true">
                            {" "}
                          </i>
                          &nbsp;&nbsp;Add New Card
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex-auto p-4">
                    <div className="grid md:grid-cols-2 gap-3 px-2">
                      {data?.creditCards?.map((item) => (
                        <div key={item?._id} className="mb-6 md:flex-none">
                          <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-100 dark:border-slate-700 bg-clip-border">
                            <img
                              className="mb-0 mr-4 w-1/10 h-10 w-16"
                              src={
                                item?.cardType === "MasterCard"
                                  ? "/image/masterCard.png"
                                  : "/image/paypal.png"
                              }
                              alt="logo"
                            />

                            <h6 className="mb-0 dark:text-white text-lg">
                              {item?.cardNumber}
                            </h6>
                            <BsTicketDetailed
                              className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                              data-target="tooltip_trigger"
                              data-placement="top"
                              aria-hidden="true"
                            />
                            <div
                              data-target="tooltip"
                              className="px-2 py-1 text-sm text-white bg-black rounded-lg hidden"
                              style={{
                                position: "absolute",
                                inset: "auto auto 0px 0px",
                                margin: 0,
                                transform: "translate3d(652.8px, -388px, 0px)",
                              }}
                              data-popper-placement="top"
                            >
                              Edit Card
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow=""
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  transform: "translate3d(0px, 0px, 0px)",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <div className="flex flex-wrap">
                  <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                    <h6 className="mb-0 dark:text-white">Invoices</h6>
                  </div>
                  <div className="flex-none w-1/2 max-w-full px-3 text-right">
                    <Button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">
                      View All
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex-auto p-4 pb-0">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        Feb, 15, 2024
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #MS-415646
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $180
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        Feb, 10, 2024
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #RV-126749
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $250
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        Feb, 05, 2024
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #FB-212562
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $560
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        Feb, 15, 2024
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #QW-103578
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $120
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 border-0 rounded-b-inherit rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        Feb, 05, 2024
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #AR-803481
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $300
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountData;
