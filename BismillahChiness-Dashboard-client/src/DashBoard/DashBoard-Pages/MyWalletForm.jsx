import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { increment } from "../../redux/counterSlice";
import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import CardOne from "../../../public/CardOne.json";
import CardTwo from "../../../public/CardTwo.json";
import { current } from "@reduxjs/toolkit";
import { modifyData } from "../../Hooks/Api";
import useGetUserData from "../../Hooks/useGetUserData";
import { AdminDataContext } from "../../Context/AdminProvider";


const MyWalletForm = () => {
  const authInfo = useContext(AdminDataContext);
  const [userId, setId] = useState("");
  const { LoggedUser, isAdmin } = authInfo;
  // const { user } = authInfo;
  // console.log(user.email);
  const user = LoggedUser[0];
  // console.log(user.email);
  const [data] = useGetUserData(`/api/userData/${user?.email}`);
  console.log(data)

  useEffect(() => {
    data?.accounts?.map((acc) => {
      setId(acc?.userId);
    }, []);
  });
  // console.log(userId)
  // redux
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const inputAmount = parseInt(form.money.value);
    const num = parseInt(form.number.value);
    const amountStr = document.getElementById("wallet-amount").innerText;
    const amountInt = parseInt(amountStr);
    if (inputAmount >= amountInt) {
      return toast.error("You have not enough money");
    }
    const currentAmount = amountInt - inputAmount;
    // console.log(amount);
    if (currentAmount <= 100) {
      return toast.error("Your Account Balance is Low");
    }
    document.getElementById("wallet-amount").innerText = currentAmount;

    const newTransaction = {
      cardNum: num,
      amount: inputAmount,
      senderId: userId,
    };
    // console.log(typeof num);
    // console.log(typeof inputAmount);
    // console.log(typeof userId);
    try {
      const res = await modifyData("/api/transaction", "POST", newTransaction);
      if (res) {
        toast.success("Transaction Successful");
        console.log(res)
      }
    } catch (error) {
      if (error) {
        console.log(error);

        return toast.error("Something wrong, Please try again");
      }
    }
    console.log(newTransaction);
    dispatch(increment());
    form.reset();
  };

  // Credit card
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      <div className="py-7 flex w-full gap-7 transition-all duration-1000 ease-in-out ">
        <div className="flex flex-col w-full gap-7">
          <div className="bg-gradient-to-tl flex flex-col md:flex-row rounded-xl dark:bg-dark p-5 relative overflow-hidden">
            <div className="flex flex-1 gap-4 sm:flex-wrap sm:gap-12 xl:gap-6 flex-col lg:flex-row">
              {/* <div className="flex-1 flex-col gap-3 justify-center items-center">
                <span className="text-[32px] font-bold text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Your Balance: $<span id="wallet-amount">1000</span>
                </span>
                <div className="flex gap-1 items-center">
                  <span className="mb-1 text-xl font-bold text-dark dark:text-white">
                    ID:
                  </span>
                  <span className="mb-1 text-base font-bold text-dark dark:text-white">
                    {user[0]?._id}
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 mt-10">
                  <Lottie animationData={CardTwo} />
                  <Lottie animationData={CardOne} />
                </ul>
              </div> */}
              {/* balance stats */}
              <div className="col-span-6 overflow-hidden bg-white border shadow-xs rounded-t-2xl rounded-b-md md:col-span-3 lg:col-span-2">
                <div className="py-4 text-white px-7 bg-gradient-to-r from-blue-500 to-blue-900 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center p-1 bg-gray-900 rounded-full bg-opacity-50 space-x-1.5">
                      <img
                        className="w-8 h-8 rounded-full p-0.5 bg-opacity-30 bg-white"
                        src={user?.imageSrc}
                        alt=""
                      />
                      <h4 className="pr-2 text-xs text-white text-opacity-700">
                        {user?.name}
                      </h4>
                    </div>

                    <div className="flex items-center justify-center w-10 h-10 bg-gray-900 bg-opacity-50 rounded-xl">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 mb-20">
                    <h4 className="text-xl text-white text-opacity-90">
                      Total balance :
                    </h4>

                    <h2 className="text-4xl font-light text-white text-opacity-40">
                      <span className="text-white text-opacity-80" id="wallet-amount">1000</span>{" "}
                      USD
                    </h2>
                  </div>
                </div>

                <div className="pb-5 -mt-10 px-7">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="px-5 py-3 bg-white border rounded-md shadow-lg border-opacity-30">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm">Transfer</span>
                        <svg
                          className="w-6 h-6 p-0.5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </div>

                      <div className="bg-gray-200 rounded-md px-2 py-0.5 text-center mt-2.5 font-medium text-gray-600 border border-opacity-30">
                        9,799
                      </div>
                    </div>

                    <div className="px-5 py-3 bg-white border rounded-md shadow-lg border-opacity-30">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm">Reception</span>
                        <svg
                          className="w-6 h-6 p-0.5 transform rotate-180 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </div>

                      <div className="bg-gray-200 rounded-md px-2 py-0.5 text-center mt-2.5 font-medium text-gray-600 border border-opacity-30">
                        5,300
                      </div>
                    </div>
                  </div>

                  <div className="inline-block">
                    <div className="flex items-center flex-grow-0 px-3 py-1 mt-5 bg-green-700 rounded-full bg-opacity-80 space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <p className="text-xs text-white">Pending</p>
                    </div>
                  </div>

                  <div className="mt-5 text-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Benin</span>
                      <h4>
                        <span className="font-medium">1,385</span>{" "}
                        <span className="text-lg text-gray-400">USD</span>
                      </h4>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Togo</span>
                      <h4>
                        <span className="font-medium">1,566</span>{" "}
                        <span className="text-lg text-gray-400">USD</span>
                      </h4>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Senegal</span>
                      <h4>
                        <span className="font-medium">2,566</span>{" "}
                        <span className="text-lg text-gray-400">USD</span>
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 mt-5 text-sm">
                    <button className="bg-purple-200 border border-gray-300 border-opacity-30 text-purple-500 rounded py-1.5 focus:outline-none hover:outline-none hover:shadow-lg transition duration-300">
                      View Details
                    </button>

                    <button className="bg-green-100 text-green-600 rounded py-1.5 focus:outline-none hover:outline-none hover:shadow-lg transition duration-300">
                      Request Money
                    </button>
                  </div>
                </div>
              </div>

              {/* balance stats */}
              <div className="w-full px-4 lg:w-1/2 xl:w-4/12">
                <div className="mx-4">
                  <div className="credit-card sm:w-auto mx-auto">
                    <div className="shadow-lg rounded-xl py-8 md:py-3">
                      <header className="flex flex-col justify-center items-center">
                        <div className="relative">
                          <Cards
                            number={state.number}
                            expiry={state.expiry}
                            cvc={state.cvc}
                            name={state.name}
                            focused={state.focus}
                          />
                        </div>
                      </header>
                      <form className="p-4" onSubmit={handleSubmit}>
                        <div className="my-3">
                          <input
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            className="block mx-auto w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 border-none focus:border-none"
                            required
                            maxLength={16}
                            value={state.number}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                          />
                        </div>
                        <div className="my-3">
                          <input
                            type="text"
                            name="money"
                            placeholder="Money"
                            className="block mx-auto w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 border-none focus:border-none"
                            required
                            maxLength={8}
                          />
                        </div>
                        <footer className="px-4 pb-4 flex justify-center">
                          <button
                            href="#_"
                            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
                          >
                            <span className="absolute left-0 block w-full h-0 transition-all bg-[#2195f3] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </span>
                            <span className="relative">Send Money</span>
                          </button>
                        </footer>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWalletForm;
