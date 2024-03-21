/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import {
  Input,
  Select,
  Option,
  Button,
  CardHeader,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Checkbox,
} from "@material-tailwind/react";
import { FaCopy, FaKey } from "react-icons/fa";
import useCreditCardGenerator from "../../Hooks/generateCardNumber";
import { modifyData } from "../../Hooks/Api";
import { AdminDataContext } from "../../Context/AdminProvider";

const SpringModal = ({ setOpenModal, openModal }) => {
  const { LoggedUser } = useContext(AdminDataContext);
  const { _id } = LoggedUser[0] || {};
  console.log(_id);
  const { generateCreditCardNumber } = useCreditCardGenerator();
  const [cardNumber, setCardNumber] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const data = [
    {
      label: "Master Card",
      value: "MasterCard",

      number: "4332..........6592",
    },
    {
      label: "Visa",
      value: "Visa",

      number: "5327.........6546",
    },
    {
      label: "American Express",
      value: "American Express",

      number: "3772.........2259",
    },
  ];
  const [formData, setFormData] = useState({
    cvv: "",
    creditLimit: "",
    availableCredit: "",
    cardStatus: "Active",
  });

  useEffect(() => {
    setFormData({
      ...formData,
      cardNumber,
    });
  }, [cardNumber]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      cardNumber,
    });
  };

  const handleGenerateNewNumbers = (type) => {
    if (type === "MasterCard") {
      setCardNumber(generateCreditCardNumber(4, 16));
    } else if (type === "Visa") {
      setCardNumber(generateCreditCardNumber(5, 16));
    } else {
      setCardNumber(generateCreditCardNumber(37, 15));
    }
  };
  const handleCopyCardNumber = () => {
    const tempInput = document.createElement("input");
    tempInput.value = cardNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  useEffect(() => {
    if (copySuccess) {
      toast.success("Card Number Copied in your clipboard");
    }
  }, [copySuccess]);
  const handleFormSubmit = async (type) => {
    try {
      const res = await modifyData(`/api/credit?userId=${_id}`, "POST", {
        ...formData,
        cardType: type,
        userId: _id,
      });
      if (res) {
        toast.success(`Your ${type} account created successfully`);
      }
    } catch (error) {
      toast.error(`You Already have ${type} account so can't create another.`);
    }
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
          openModal ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-black bg-opacity-60`}
      >
        <div
          className="bg-white rounded-lg overflow-hidden max-w-xl w-full"
          onClick={handleFormClick}
        >
          <div className="px-4 py-6">
            <CardHeader
              color="blue"
              floated={false}
              shadow={false}
              className="m-0 grid place-items-center px-4 py-8 text-center"
            >
              <Typography variant="h5" color="white">
                Credit Card Information
              </Typography>
            </CardHeader>

            <div>
              <CardBody className="px-2">
                <Tabs value="MasterCard">
                  <TabsHeader>
                    {data.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        <div className="flex items-center gap-2">{label}</div>
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody
                    animate={{
                      initial: { y: 550 },
                      mount: { y: 0 },
                      unmount: { y: 550 },
                    }}
                  >
                    {data.map(({ value, number }) => (
                      <div key={value}>
                        <TabPanel value={value}>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleFormSubmit(value);
                            }}
                          >
                            <div className="grid grid-cols-2 gap-4">
                              <Button
                                variant="outlined"
                                color="blue-gray"
                                name="cardNumber"
                                label="Card Number"
                                onChange={handleChange}
                                fullWidth
                                size="sm"
                                icon={FaCopy}
                                onClick={handleCopyCardNumber}
                              >
                                <div className="relative flex items-center gap-1 overflow-hidden pr-[60px]">
                                  <span className="text-base whitespace-nowrap md:ml-3">
                                    {/* {cardNumber
                                      ? cardNumber
                                      : "4455.............9191"} */}
                                    {cardNumber || number}
                                  </span>
                                  <span className="absolute right-0 text-lg md:right-2 grid h-full w-8 place-items-center">
                                    <FaCopy />
                                  </span>
                                </div>
                              </Button>
                              <Button
                                size="sm"
                                variant="gradient"
                                color="light-blue"
                                className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                                onClick={() => handleGenerateNewNumbers(value)}
                              >
                                Generate Card Numbers
                                <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                                  <FaKey />
                                </span>
                              </Button>

                              <Input
                                name="cvv"
                                label="CVV/CVC Code"
                                value={formData.cvv}
                                onChange={handleChange}
                                fullWidth
                                type="text"
                                maxlength={4}
                              />
                              <Input
                                name="creditLimit"
                                label="Credit Limit"
                                value={formData.creditLimit}
                                onChange={handleChange}
                                fullWidth
                                maxLength={4}
                              />
                              <Input
                                name="availableCredit"
                                label="Available Credit"
                                value={formData.availableCredit}
                                onChange={handleChange}
                                fullWidth
                              />

                              <Select
                                name="cardStatus"
                                label="Card Status"
                                value={formData.cardStatus}
                                onChange={handleChange}
                                fullWidth
                              >
                                <Option value="Active">Active</Option>
                                <Option value="Inactive">Inactive</Option>
                                <Option value="Lost/Stolen">Lost/Stolen</Option>
                              </Select>
                              <div className="col-span-2 mb-3">
                                <label className="flex items-center">
                                  <Checkbox
                                    color="blue"
                                    type="checkbox"
                                    required
                                    name="cardholderAgreementAcceptance"
                                  />
                                  <span className="text-sm">
                                    I agree to the terms and conditions
                                  </span>
                                </label>
                              </div>
                            </div>

                            <Button type="submit" color="blue" fullWidth>
                              Submit
                            </Button>
                          </form>
                        </TabPanel>
                      </div>
                    ))}
                  </TabsBody>
                </Tabs>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpringModal;
