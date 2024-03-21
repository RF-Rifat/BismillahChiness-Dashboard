import { useState } from "react";
import { MdGasMeter } from "react-icons/md";
import { FcElectricity } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiIsland } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";

const PayBill = () => {
  const [bills] = useState([
    {
      id: 1,
      date: "13 march, 2022",
      type: "Electricity Bill",
      icon: FcElectricity,
      description: "Pay your electricity bills from the comfort of your home",
    },
    {
      id: 2,
      date: "14 march, 2022",
      type: "Gas Bill",

      icon: MdGasMeter,
      description: "Pay your gas bill easily, whenever needed",
    },
    {
      id: 3,
      date: "15 march, 2022",
      type: "Telephone Bill",
      icon: BsFillTelephoneFill,
      description: "No more standing in queues or worrying about documents.",
    },
    {
      id: 4,
      date: "15 march, 2022",
      type: "Land Fee",
      icon: GiIsland,
      description:
        "Wherever you are, pay land development tax and e-mutation fees",
    },
    {
      id: 5,
      date: "15 march, 2022",
      type: "Water Bill",
      icon: FaHandHoldingWater,
      description:
        "Pay water bills anytime with the SecureSavings website effortlessly.",
    },
  ]);

  return (
    <div>
      <section className="flex items-center lg:h-screen font-poppins dark:bg-dark">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="flex flex-wrap justify-center -mx-3 pt-11">
            {bills.map((bill) => (
              <div
                key={bill.id}
                className="w-full shadow-md transform hover:-translate-y-1 duration-300 hover:shadow-xl  px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3 dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              >
                <div className="p-5 bg-white rounded-b shadow dark:bg-dark">
                  <a
                    href="#"
                    className="px-4 py-1 text-sm text-blue-600 rounded-full dark:text-gray-400 dark:bg-gray-600 bg-blue-50"
                  >
                    {bill.date}
                  </a>
                  <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                    {bill.type}{" "}
                    <span className="inline-block ml-1 ">
                      {bill.icon === FcElectricity ? (
                        <FcElectricity />
                      ) : bill.icon === MdGasMeter ? (
                        <MdGasMeter />
                      ) : bill.icon === BsFillTelephoneFill ? (
                        <BsFillTelephoneFill />
                      ) : bill.icon === GiIsland ? (
                        <GiIsland />
                      ) : (
                        <FaHandHoldingWater />
                      )}
                    </span>
                  </h2>
                  <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                    {bill.description}
                  </p>
                  {/* Link to the bill details page */}
                  <Link
                    to={`/dashboard/bill/${bill.id}?type=${bill.type}`}
                    className="inline-flex items-center text-lg font-semibold text-blue-600 dark:hover:text-gray-300 dark:text-gray-400 hover:text-black"
                  >
                    Pay Bill
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={23}
                      height={23}
                      fill="currentColor"
                      className="ml-2 bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayBill;
