import React from "react";
import {
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { MdDesignServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
export function NavSidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const navListMenuItems = [
    {
      title: "Home Loans",
      link: "homeLoan",
      description: "A simple way to buy a home or refinance.",
      icon: SquaresPlusIcon,
    },
    {
      title: "Business Loans",
      link: "businessLoan",
      description: "A business Loan, Just as You Need It",
      icon: UserGroupIcon,
    },
    {
      title: "Saving",
      link: "saving",
      description: "Learn how we can help you achieve your goals.",
      icon: SunIcon,
    },
  ];

  return (
    <Accordion
      className="!p-0 m-0"
      open={open === 1}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === 1 ? "rotate-180" : ""
          }`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-b-0 p-3"
        >
          <div className="flex gap-3 items-center  lg:rounded-full hover:bg-none lg:mb-0 lg:mt-0 lg:items-center px-3 dark:text-white">
            {React.createElement(MdDesignServices, {
              className:
                "h-[18px] w-[18px] antialiased dark:text-darkText mt-[3px] font-sans text-gray-700 font-medium text-lg text-center dark:text-white",
            })}{" "}
            <span
              className={`pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full text-lg dark:text-white`}
            >
              {" "}
              Services
            </span>
          </div>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List>
          {navListMenuItems.map((item) => (
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-dark text-white rounded-md"
                  : ""
              }
              to={item.link}
              key={item.title}
            >
              <ListItem>
                <div className="grid rounded-lg p-2 ">
                  {" "}
                  {React.createElement(item.icon, {
                    strokeWidth: 2,
                    className: "text-gray-900 bg-none h-4 w-4",
                  })}
                </div>
                <div>
                  <div className="flex items-center font-bold text-sm text-center">
                    {item?.title}
                  </div>
                  <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    {item?.description}
                  </Typography>
                </div>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </AccordionBody>
    </Accordion>
  );
}
