import React, { useEffect, useState } from "react";
import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { modifyData } from "../../Hooks/Api";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

export default function PayBillData({ refetch }) {
  const { countries } = useCountries();
  const [types, setType] = React.useState("card");

  const [selectedMonth, setSelectedMonth] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [totalPrice, setTotalPrice] = React.useState();
  const { type } = useParams();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleAmountChange = (event) => {
    setTotalPrice(event.target.value); // Update total price based on user input
  };
  // Array of month options
  const monthOptions = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];
  const stripe = useStripe();
  const elements = useElements();
  const { authInfo } = useAuth();
  const { displayName, photoURL } = authInfo?.user || {};
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  useEffect(() => {
    const createPaymentIntent = async () => {
      if (totalPrice > 0) {
        try {
          // Send a request to your backend server to create a payment intent
          const response = await fetch("/stripe/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ totalPrice }), // Send the total price in the request body
          });

          if (response.ok) {
            const data = await response.json();
            setClientSecret(data.clientSecret); // Set the client secret received from the server
          } else {
            console.error(
              "Failed to create payment intent:",
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error creating payment intent:", error);
        }
      }
    };

    createPaymentIntent(); // Call the function to create the payment intent
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirmed payment
    toast.success("Payment Successfully");
    navigate("/dashboard/invoice");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: authInfo?.user.email || "anonymous",
            name: authInfo?.user.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // now save the payment in the database
        const payment = {
          email: authInfo?.user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert use moment js
          // enrollIds: enroll.map((item) => item._id),
          // courseItemIds: enroll.map((item) => item.courseId),
          status: "pending",
          billingType: selectedOption,
          month: selectedMonth,
        };
        // const res = await axiosSecure.post("/payments", payment);
        const res = await modifyData("/api/stripe/payment", "POST", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.insertedId) {
          toast.success("Payment Successfully");
          navigate("/dashboard/invoice");
        }
      }
    }
  };

  return (
    <div>
      <Card className="w-full mx-auto max-w-[24rem]">
        <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center px-4 py-8 text-center"
        >
          <div className="mb-4 h-5 p-6 text-white">
            {types === "card" ? (
              <CreditCardIcon className="h-10 w-10 text-white" />
            ) : (
              <img
                alt="paypal "
                className="w-14 "
                src="https://docs.material-tailwind.com/icons/paypall.png"
              />
            )}
          </div>
          <Typography variant="h5" color="white">
            {type} Payment
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={types} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="card" onClick={() => setType("card")}>
                Pay with Card
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
                Pay with Others
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <form
                  onSubmit={handleSubmit}
                  className="mt-12 flex flex-col gap-4"
                >
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Money Amount
                    </Typography>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={totalPrice} // Bind total price to input value
                      onChange={handleAmountChange} // Handle amount change
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium "
                    >
                      Card Details
                    </Typography>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                              color: "#aab7c4",
                            },
                          },
                          invalid: {
                            color: "#9e2146",
                          },
                        },
                      }}
                    />
                    {/* <Input
                      maxLength={19}
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                      icon={
                        <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                      }
                      placeholder="0000 0000 0000 0000"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    /> */}
                    <p className="text-red-600">{error}</p>
                    {transactionId && (
                      <p className="text-green-600">
                        Your Transaction Id :{transactionId}
                      </p>
                    )}
                    <div className="my-4 flex items-center gap-4">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium"
                        >
                          Billing Type
                        </Typography>
                        <Select
                          value={selectedOption}
                          onChange={handleOptionChange}
                          placeholder="Select option"
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        >
                          <Option value="prepaid">Prepaid</Option>
                          <Option value="postpaid">Postpaid</Option>
                        </Select>
                      </div>
                      <div></div>
                    </div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Select Month
                    </Typography>

                    <Select
                      value={selectedMonth}
                      onChange={handleMonthChange}
                      placeholder="Select month"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    >
                      {monthOptions.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <Button
                    size="lg"
                    type="submit"
                    // disabled={!stripe || !clientSecret}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Pay Now
                  </Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
              {/* pay pal payment */}
              <TabPanel value="paypal" className="p-0">
                <form className="mt-12 flex flex-col gap-4">
                  <div>
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Personal Details
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Money Amount
                    </Typography>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-6">
                    <Typography
                      variant="paragraph"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Billing Address
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Country
                    </Typography>
                    <Select
                      placeholder="USA"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      menuProps={{ className: "h-48" }}
                    >
                      {countries.map(({ name, flags }) => (
                        <Option key={name} value={name}>
                          <div className="flex items-center gap-x-2">
                            <div>
                              <img
                                src={flags.svg}
                                alt={name}
                                className="h-4 w-4 rounded-full object-cover"
                              />
                              {name}
                            </div>
                          </div>
                        </Option>
                      ))}
                    </Select>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mt-4 -mb-2 font-medium"
                    >
                      Postal Code
                    </Typography>
                    <Input
                      placeholder="0000"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{ className: "mt-4" }}
                    />
                  </div>
                  <Button size="lg">pay with paypal</Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
