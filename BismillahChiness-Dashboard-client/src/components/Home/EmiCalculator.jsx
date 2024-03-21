import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [month, setMonth] = useState("");
  const [interest, setInterest] = useState("");
  const [calculatedInterest, setCalculatedInterest] = useState(0);

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const calculateInterest = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interest) / 100;
    const time = parseFloat(month) / 12;

    const calculatedInterest = (principal * rate * time).toFixed(2);
    setCalculatedInterest(calculatedInterest);
  };

  const handleReset = () => {
    setLoanAmount("");
    setMonth("");
    setInterest("");
    setCalculatedInterest(0);
  };

  return (
    <>
      <div className="mb-5 max-w-screen-2xl mx-auto dark:bg-dark">
        <div className="px-4 pt-14 text-center md:m-6">
          <h2 className="pb-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-300">
            Loan Calculation Services <br /> Division
          </h2>
          <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto">
            <div className="flex-1 h-2 bg-teal-200"></div>
            <div className="flex-1 h-2 bg-teal-400"></div>
            <div className="flex-1 h-2 bg-teal-300"></div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse items-center gap-5 p-3">
          <div className="lg:w-1/2 w-full lg:pt-10 p-5">
            <h4 className="text-red-400 text-[18px] font-semibold">
              CALCULATE LOAN
            </h4>
            <h2 className="text-blue-gray-900 dark:text-darkText font-bold xl:text-4xl text-2xl mt-4 mb-10">
              Online EMI Calculator
            </h2>
            <div className="flex flex-col gap-6">
              <Input
                onChange={handleLoanAmountChange}
                value={loanAmount}
                color="indigo"
                label="Loan Amount"
              />
              <Input
                onChange={handleMonthChange}
                value={month}
                color="indigo"
                label="Month"
              />
              <Input
                onChange={handleInterestChange}
                value={interest}
                color="indigo"
                label="Interest %"
              />
              <div className="flex gap-4">
                <div className="flex gap-4">
                  <Button
                    className="text-white bg-red-500 font-medium text-[14px] rounded-none"
                    onClick={calculateInterest}
                  >
                    Calculate
                  </Button>
                  <Button
                    className="text-red-500 border-red-500 font-medium text-[14px] rounded-none"
                    variant="outlined"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </div>
              <h1 className="text-xl h-10">
                {calculatedInterest > 0 ? calculatedInterest : ""}
              </h1>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 w-full">
            <img
              className="w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmiCalculator;
