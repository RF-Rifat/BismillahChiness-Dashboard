/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import { AdminDataContext } from "../../Context/AdminProvider";
import { modifyData } from "../../Hooks/Api";
import toast from "react-hot-toast";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { MoneyStepper } from "./MoneyStepper";

export default function Modal({ open, handler }) {
  const data = [
    {
      label: "Saving",
      value: "Saving",
      icon: Square3Stack3DIcon,
      desc: {
        amount: [1000, 1500, 2250, 3000],
        desc: "A savings account is designed for individuals who want to set aside money for future use, such as emergencies, large purchases, or long-term goals.",
      },
    },
    {
      label: "Checking",
      value: "Checking",
      icon: IoShieldCheckmark,
      desc: {
        amount: [2000, 3000, 5000, 10000],
        desc: "A checking account is a basic banking account that allows you to deposit and withdraw money for everyday transactions.",
      },
    },
    {
      label: "Money Market",
      value: "Money Market",
      icon: GiMoneyStack,
      desc: {
        amount: [10000, 15000, 22500, 30000],
        desc: "A money market account is a type of savings account that usually offers higher interest rates than traditional savings accounts.",
      },
    },
  ];

  const { LoggedUser } = useContext(AdminDataContext);
  const { _id, email, name } = LoggedUser[0] || {};
  const [accData, setAccData] = useState("");

  const generateAccountID = () => {
    const firstFewLettersEmail = email.substring(0, 4);

    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${firstFewLettersEmail}${randomNumbers}`;
  };

  const [initialDeposit, setInitialDeposit] = useState("");

  const handleCreateAccount = async (accountType, initialDeposit) => {
    const newAcc = {
      name,
      accountType,
      accountId: generateAccountID(),
      userId: _id,
      balance: parseFloat(initialDeposit) || 500,
      status: "pending",
    };
    try {
      const res = await modifyData(
        `/api/account?userId=${_id}`,
        "POST",
        newAcc
      );
      if (res.accountId) {
        toast.success(`Your ${accountType} account created successfully`);
        handler(!open);
      }
    } catch (error) {
      toast.error(
        `You Already have ${accountType} account so can't create another.`
      );
      handler(!open);
    }
  };

  return (
    <Card>
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <Typography variant="h5" color="white">
          Create Account
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value="Saving">
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}

                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <div key={value} onChange={() => setAccData(value)}>
                <TabPanel value={value}>
                  {desc.desc}
                  {
                    <MoneyStepper
                      amount={desc.amount}
                      setInitialDeposit={setInitialDeposit}
                    />
                  }

                  <Button
                    fullWidth
                    className="col-span-2"
                    onClick={() => handleCreateAccount(value, initialDeposit)}
                  >
                    Create Account
                  </Button>
                </TabPanel>
              </div>
            ))}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
