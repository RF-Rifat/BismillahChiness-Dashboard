/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Input,
  Option,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { modifyData } from "../../Hooks/Api";
import toast from "react-hot-toast";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const HomeLoan = () => {
  const [open, setOpen] = useState(0);
  const [financing, setFinancing] = useState("");
  const [banking, setBanking] = useState("");
  const [loanAmount, setLoanAmount] = useState(0);
  const [selectedRadio, setSelectedRadio] = useState("12 months");

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleLoan = async (e) => {
    e.preventDefault();
    const form = e.target;
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    const useLoan = {
      financing,
      banking,
      loanAmount,
      formattedDate,
      selectedRadio,
    };
    console.log(selectedRadio);

    try {
      const res = await modifyData("/api/loan", "POST", useLoan);
      if (res.acknowledged) {
        toast.success("Application submitted");
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-[#F5FAFF] relative">
        <div className="py-24">
          <img
            className="hidden md:block"
            src="https://i.ibb.co/Ydxr8H5/Home-loan.jpg"
            alt=""
          />
        </div>
        <div className="absolute lg:top-48 md:top-32 top-20 transform -translate-y-1/2 lg:left-24 left-5 mt-5">
          <h2 className="dark:text-[#003E5B] lg:text-6xl text-4xl font-semibold">
            Home Loans
          </h2>
          <div className="flex items-center gap-5 dark:text-[#003E5B] lg:my-5 font-semibold lg:text-xl text-base my-2">
            Secure Saving
            <FaGreaterThan className="dark:text-[#003E5B]" />
            Home Loans
          </div>
        </div>

        {/* Mortgage lending Section */}

        <div className="relative">
          <div>
            <img
              className="lg:h-[550px] h-[300px] w-[100%]"
              src="https://i.ibb.co/Xt4CHXY/Mortgage-lending.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="bg-white p-10 w-4/5 rounded-xl absolute lg:top-36 md:left-20 top-12 left-[42px] lg:left-32 shadow-2xl">
              <div>
                <h2 className="lg:text-6xl text-4xl dark:text-[#003E5B] font-semibold my-5">
                  Mortgage lending
                </h2>
                <span className="dark:text-[#003E5B]">
                  Our experienced loan officers look forward to helping you
                  finance the home of your dreams!
                </span>
              </div>
              <div className="flex justify-center gap-5 mt-5">
                <a href="#applyloan">
                  <Button className="md:rounded-full bg-black dark:bg-[#003E5B]">
                    Apply for home loan
                  </Button>
                </a>
                <Button
                  variant="outlined"
                  className="md:rounded-full outline-[#003E5B]"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Great benefits from secureService */}

        <div>
          <div className="text-center mt-40 md:my-20">
            <h2 className="text-green-600 font-semibold lg:text-2xl text-xl my-5">
              Why SecureService is a great financing option for you
            </h2>
            <span className="text-black lg:text-6xl text-4xl font-semibold dark:text-[#003E5B]">
              Great benefits from SecureService
            </span>
            <p className="dark:text-[#003E5B] my-5">
              Building or buying, for yourself or to invest, we have the home
              loan for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-4">
            <div className="border border-green-600 rounded-lg bg-white p-10">
              <div className="flex justify-center items-center">
                <img
                  src="https://i.ibb.co/zrjnnbG/Great-benefits-1.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl dark:text-[#003E5B] font-semibold my-5">
                  Simple Application Process
                </h2>
                <p className="dark:text-[#003E5B]">
                  Lorem ipsum dolor sit amet, consectetur adiet libero.
                </p>
              </div>
            </div>
            <div className="border border-green-600 rounded-lg bg-white p-10">
              <div className="flex justify-center items-center">
                <img
                  src="https://i.ibb.co/LkQkrLB/Great-benefits-2.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl dark:text-[#003E5B] font-semibold my-5">
                  No credit check
                </h2>
                <p className="dark:text-[#003E5B]">
                  Lorem ipsum dolor sit amet, consectetur adiet libero.
                </p>
              </div>
            </div>
            <div className="border border-green-600 rounded-lg bg-white p-10">
              <div className="flex justify-center items-center">
                <img
                  src="https://i.ibb.co/bzW4YtX/Great-benefits-3.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl dark:text-[#003E5B] font-semibold my-5">
                  No employment requiered
                </h2>
                <p className="dark:text-[#003E5B]">
                  Lorem ipsum dolor sit amet, consectetur adiet libero.
                </p>
              </div>
            </div>
            <div className="border border-green-600 rounded-lg bg-white p-10">
              <div className="flex justify-center items-center">
                <img
                  src="https://i.ibb.co/zrjnnbG/Great-benefits-1.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl dark:text-[#003E5B] font-semibold my-5">
                  Secure loan
                </h2>
                <p className="dark:text-[#003E5B]">
                  Lorem ipsum dolor sit amet, consectetur adiet libero.
                </p>
              </div>
            </div>
            <div className="border border-green-600 rounded-lg bg-white p-10">
              <div className="flex justify-center items-center">
                <img
                  src="https://i.ibb.co/LkQkrLB/Great-benefits-2.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl dark:text-[#003E5B] font-semibold my-5">
                  Secure loan
                </h2>
                <p className="dark:text-[#003E5B]">
                  Lorem ipsum dolor sit amet, consectetur adiet libero.
                </p>
              </div>
            </div>
            <div className="border border-green-600 rounded-lg bg-white p-10">
              <div className="flex justify-center items-center">
                <img
                  src="https://i.ibb.co/bzW4YtX/Great-benefits-3.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl dark:text-[#003E5B] font-semibold my-5">
                  Cash within minutes
                </h2>
                <p className="dark:text-[#003E5B]">
                  Lorem ipsum dolor sit amet, consectetur adiet libero.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Application */}
        <div id="applyloan" className="lg:mt-32 mt-12">
          <div className="text-center">
            <h2 className="text-green-600 font-semibold lg:text-2xl text-xl my-5">
              Quick & easy home loan
            </h2>
            <span className="text-black lg:text-6xl text-4xl font-semibold dark:text-[#003E5B]">
              Take One Step Closer to Your Dream.
            </span>
            <p className="dark:text-[#003E5B] my-5">
              Get Home loans approved within days with transparent lending
              criteria and transparent processes.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 lg:my-20 my-12 px-4 pb-10">
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-center dark:text-[#003E5B]">
                <h2 className="text-4xl font-medium my-5">Apply for a loan</h2>
                <p>
                  Please fill the form below. We will get in touch with you
                  within 1-2 business days, to request all necessary details
                </p>
              </div>
            </div>
            <div className="bg-white p-10 col-span-2 rounded-lg shadow-lg">
              <div>
                <div className="bg-[#F5FAFF] flex justify-center p-5 rounded-lg">
                  <div>
                    <img
                      className="w-16"
                      src="https://i.ibb.co/GWX0Q4K/icons8-house-96.png"
                      alt=""
                    />
                    <p className="dark:text-[#003E5B]">Home Loan</p>
                  </div>
                </div>

                <form onSubmit={handleLoan}>
                  <div className="flex md:flex-row flex-col gap-5 my-10">
                    <Select
                      name="financing"
                      onChange={(selectedValue) => setFinancing(selectedValue)}
                      label="Choose your financing type"
                      success
                    >
                      <Option value="debtFinancing" className="text-green-600">
                        Debt Financing
                      </Option>
                      <Option value="equityFinance" className="text-green-600">
                        Equity Finance
                      </Option>
                    </Select>
                    <Select
                      name="banking"
                      onChange={(selectedValue) => setBanking(selectedValue)}
                      label="Choose your preferred bank service"
                      success
                    >
                      <Option value="digitalBanking" className="text-green-600">
                        Digital Banking
                      </Option>
                      <Option
                        value="individualBanking"
                        className="text-green-600"
                      >
                        Individual Banking
                      </Option>
                    </Select>
                  </div>
                  <div className="my-5">
                    <Input
                      name="loanAmount"
                      onChange={(e) => setLoanAmount(e.target.value)}
                      color="teal"
                      label="Your loan amount"
                      success
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-10">
                    <Radio
                    onChange={() => setSelectedRadio("6 months")}
                      name="type"
                      ripple={false}
                      className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
                      label={
                        <Typography
                          color="blue-gray"
                          className="font-normal text-green-600"
                        >
                          6 months
                        </Typography>
                      }
                    />
                    <Radio
                      name="type"
                      onChange={() => setSelectedRadio("12 months")}
                      defaultChecked
                      ripple={false}
                      className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
                      label={
                        <Typography
                          color="blue-gray"
                          className="font-normal text-green-600"
                        >
                          12 months
                        </Typography>
                      }
                    />
                    <Radio
                      name="type"
                      onChange={() => setSelectedRadio("24 months")}
                      ripple={false}
                      className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
                      label={
                        <Typography
                          color="blue-gray"
                          className="font-normal text-green-600"
                        >
                          24 months
                        </Typography>
                      }
                    />
                    <Radio
                      name="type"
                      onChange={() => setSelectedRadio("36 months")}
                      ripple={false}
                      className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
                      label={
                        <Typography
                          color="blue-gray"
                          className="font-normal text-green-600"
                        >
                          36 months
                        </Typography>
                      }
                    />
                  </div>
                  <Button type="submit" className="btn">
                    Apply Loan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently asked questions */}
        <div className="pb-20">
          <div className="text-center">
            <h2 className="text-green-600 font-semibold lg:text-2xl text-xl my-5">
              If you have question,we have answer
            </h2>
            <span className="text-black lg:text-6xl text-4xl font-semibold dark:text-[#003E5B]">
              Frequently asked questions
            </span>
            <p className="dark:text-[#003E5B] my-10">
              Get answers to all questions you have and boost your knowledge so
              you can save, invest and spend smarter. See all questions here!
            </p>
          </div>

          <div className="lg:w-1/2 w-full mx-auto px-4">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                What do I do if I lose my card or it gets stolen?
              </AccordionHeader>
              <AccordionBody>
                If your card is missing, let us know immediately. We’ll block
                your card right away send over a new one on the same day.To
                report a lost or stolen card, call us at (406) 555-0120.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                What is your customer service number?
              </AccordionHeader>
              <AccordionBody>
                If your card is missing, let us know immediately. We’ll block
                your card right away send over a new one on the same day.To
                report a lost or stolen card, call us at (406) 555-0120.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                How do I reset my pin?
              </AccordionHeader>
              <AccordionBody>
                If your card is missing, let us know immediately. We’ll block
                your card right away send over a new one on the same day.To
                report a lost or stolen card, call us at (406) 555-0120.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                What is required to use Digital Banking?
              </AccordionHeader>
              <AccordionBody>
                If your card is missing, let us know immediately. We’ll block
                your card right away send over a new one on the same day.To
                report a lost or stolen card, call us at (406) 555-0120.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(5)}>
                Is digital banking secure?
              </AccordionHeader>
              <AccordionBody>
                If your card is missing, let us know immediately. We’ll block
                your card right away send over a new one on the same day.To
                report a lost or stolen card, call us at (406) 555-0120.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
