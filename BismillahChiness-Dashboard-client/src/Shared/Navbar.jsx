import React, { useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Drawer,
  Badge,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  InboxArrowDownIcon,
  Bars3Icon,
  ChatBubbleLeftEllipsisIcon,
  UserPlusIcon,
  WalletIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  SunIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import ToggleTheme from "../components/ToggleTheme";
import useAuth from "../Hooks/useAuth";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import { NavSidebar } from "./NavSidebar";

function ProfileMenu() {
  // const  authInfo  = useContext(AuthProvider);
  const { authInfo } = useAuth();

  const { logOut } = authInfo || {};

  const { displayName, photoURL, email } = authInfo?.user || {};

  const profileMenuItems = [
    {
      label: `${displayName}`,
      link: "/",
      icon: UserCircleIcon,
    },
    {
      label: `${email}`,
      link: "/",
      icon: InboxArrowDownIcon,
    },
    {
      label: "DashBoard",
      link: "/dashboard/home",
      icon: LuLayoutDashboard,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-sm py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Badge color="green" className="m-1">
            <Avatar
              variant="circular"
              size="sm"
              alt="Profile img"
              className="border border-gray-900 p-0.5 w-10 h-10"
              src={
                photoURL
                  ? photoURL
                  : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              }
            />
          </Badge>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }) => {
          return (
            <Link to={link} key={label}>
              <MenuItem
                onClick={closeMenu}
                className="flex items-center gap-2 rounded"
              >
                {React.createElement(icon, {
                  className: `h-4 w-4`,
                  strokeWidth: 2,
                })}
                <Typography as="span" variant="small" className="font-normal">
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
        <button
          onClick={logOut}
          role="menuitem"
          className="w-full pt-[9px] pb-2 px-3 text-start leading-tight cursor-pointer select-none transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-2  hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4 text-red-500"
            strokeWidth="2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="block antialiased font-sans text-sm leading-normal text-red-500 font-normal">
            Sign Out
          </span>
        </button>
      </MenuList>
    </Menu>
  );
}

// mega menu list
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

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <Link to={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="grid rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center font-bold text-lg text-center"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div>
            <div
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-none mt-2 mb-4 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3 text-lg dark:text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <MdDesignServices className="dark:text-white" />
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavLink
        to={`/`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-dark dark:bg-white text-white dark:text-dark rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center">
          <div className="flex items-center lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3 gap-2">
            <HomeIcon className="h-[18px] w-[18px] dark:text-darkText antialiased font-sans text-gray-700 font-medium text-lg text-center" />
            <span
              className={`py-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              Home
            </span>
          </div>
        </div>
      </NavLink>
      <NavListMenu />
      <NavLink
        to={`/aboutUs`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-dark dark:bg-white text-white dark:text-dark rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center">
          <div className="flex items-center  lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3 gap-2">
            <UserPlusIcon className="h-[18px] w-[18px] dark:text-darkText antialiased font-sans text-gray-700 font-medium text-lg text-center" />
            <span
              className={`py-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              About Us
            </span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`/blog`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-dark dark:bg-white text-white dark:text-dark rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center">
          <div className="flex items-center  lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3 gap-2">
            <WalletIcon className="h-[18px] w-[18px] dark:text-darkText antialiased font-sans text-gray-700 font-medium text-lg text-center" />
            <span
              className={`py-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              Blog
            </span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`/contact`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active bg-dark dark:bg-white text-white dark:text-dark rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center">
          <div className="flex items-center  lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3 gap-2">
            <ChatBubbleLeftEllipsisIcon className="h-[18px] w-[18px] dark:text-darkText antialiased font-sans text-gray-700 font-medium text-lg text-center" />
            <span
              className={`py-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              Contact
            </span>
          </div>
        </div>
      </NavLink>
    </ul>
  );
}

function DrawerNavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavLink
        to={`/`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-dark text-white rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center ml-4">
          <div className="flex gap-3 items-center  lg:rounded-full hover:bg-none my-2 lg:mb-0 lg:mt-0 lg:items-center px-3">
            {React.createElement(HomeIcon, {
              className:
                "h-[18px] w-[18px] antialiased dark:text-darkText mt-[3px] font-sans text-gray-700 font-medium text-lg text-center",
            })}{" "}
            <span
              className={`pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              Home
            </span>
          </div>
        </div>
      </NavLink>
      <NavSidebar />
      <NavLink
        to={`/aboutUs`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-dark text-white rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center ml-4">
          <div className="flex gap-3 items-center  lg:rounded-full hover:bg-none my-2 lg:mb-0 lg:mt-0 lg:items-center px-3">
            {React.createElement(UserPlusIcon, {
              className:
                "h-[18px] w-[18px] antialiased dark:text-darkText mt-[3px] font-sans text-gray-700 font-medium text-lg text-center",
            })}{" "}
            <span
              className={`pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              About Us
            </span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`/blog`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-dark text-white rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center ml-4">
          <div className="flex gap-3 items-center  lg:rounded-full hover:bg-none my-2 lg:mb-0 lg:mt-0 lg:items-center px-3">
            {React.createElement(WalletIcon, {
              className:
                "h-[18px] w-[18px] antialiased dark:text-darkText mt-[3px] font-sans text-gray-700 font-medium text-lg text-center",
            })}{" "}
            <span
              className={`pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              Blog
            </span>
          </div>
        </div>
      </NavLink>
      <NavLink
        to={`/contact`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-dark text-white rounded-md"
            : ""
        }
      >
        <div className="font-medium text-lg text-center ml-4">
          <div className="flex gap-3 items-center  lg:rounded-full hover:bg-none my-2 lg:mb-0 lg:mt-0 lg:items-center px-3">
            {React.createElement(ChatBubbleLeftEllipsisIcon, {
              className:
                "h-[18px] w-[18px] antialiased dark:text-darkText mt-[3px] font-sans text-gray-700 font-medium text-lg text-center",
            })}{" "}
            <span
              className={`pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
            >
              {" "}
              Contact
            </span>
          </div>
        </div>
      </NavLink>
    </ul>
  );
}

export function ComplexNavbar() {
  const { authInfo } = useAuth();
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <nav className="max-w-screen-2xl bg-white dark:bg-dark dark:text-darkText mx-auto z-50 w-full p-2 lg:pl-6 sticky h-20 top-0 rounded-b-md">
        <div className="mx-auto">
          <div className="mx-auto flex items-center justify-between gap-3">
            <Link
              as="a"
              to={"/"}
              className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
            >
              <img className="h-12" src="./logo.png" alt="logo" />
            </Link>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              size="sm"
              // color="black-gray"
              variant="text"
              onClick={openDrawer}
              className="ml-auto mr-2 lg:hidden"
            >
              <Bars3Icon className={open ? "h-6 w-6 rotate-90" : "h-6 w-6 dark:text-white"} />
            </IconButton>

            <div className="flex gap-3 items-center">
              {/* toggle button */}
              <ToggleTheme></ToggleTheme>
              <Link to={"/login"}>
                {!authInfo?.user && (
                  <Button color="green">
                    <span>Log In</span>
                  </Button>
                )}
              </Link>
              {authInfo?.user && <ProfileMenu />}
            </div>
          </div>
        </div>
      </nav>

      {/* drawer */}

      <Drawer
        open={open}
        onClose={closeDrawer}
        className={`p-4 lg:hidden dark:bg-blue-gray-700 dark:text-white`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Link
            to={"/"}
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <img className="h-20" src="/logo.png" alt="logo" />
          </Link>
          <IconButton className="dark:text-white" variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <DrawerNavList></DrawerNavList>

        {!authInfo?.user && (
          <div className="flex gap-2">
            <Button variant="outlined">SIGN UP</Button>
            <Button color="blue">
              <span>Log In</span>
            </Button>
          </div>
        )}
      </Drawer>
    </>
  );
}
