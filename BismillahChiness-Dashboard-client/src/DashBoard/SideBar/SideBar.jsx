import { Link, NavLink } from "react-router-dom";
import {
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenSidenav,
} from "../../Context/index.jsx";
import {
  TableCellsIcon,
  UserCircleIcon,
  HomeIcon,
  WalletIcon,
  PlusCircleIcon,
  InboxStackIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export function SideNav() {
  const routes = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "Dashboard",
          path: "/home",
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "profile",
          path: "/profile",
        },
        {
          icon: <InboxStackIcon {...icon} />,
          name: "Account",
          path: "/account",
        },
        {
          icon: <WalletIcon {...icon} />,
          name: "My-Wallet",
          path: "/wallet",
        },
        {
          icon: <FaLightbulb {...icon} />,
          name: "Pay Bill",
          path: "/payBill",
        },
        {
          icon: <DocumentTextIcon {...icon} />,
          name: "Invoice",
          path: "/invoice",
        },
        {
          icon: <TableCellsIcon {...icon} />,
          name: "Members",
          path: "/users",
        },
        {
          icon: <PlusCircleIcon {...icon} />,
          name: "Add Blog",
          path: "/addBlog",
        },
        {
          icon: <AiOutlineTransaction className="h-6 w-6" />,
          name: "Transaction",
          path: "/transactions",
        },
        {
          icon: <ChatBubbleBottomCenterTextIcon {...icon} />,
          name: "Chat",
          path: "/chat",
        },
      ],
    },
  ];

  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-fit overflow-y-auto w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 shadow-md shadow-blue-gray-500/5 dark:bg-dark`}
    >
      <div className={`relative`}>
        <Link
          to="/"
          className="py-6 px-8 text-center grid grid-flow-col place-items-center"
        >
          <img className="h-12" src="/logo.png" alt="brand image" />
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
            className="text-white"
          >
            Secure-Savings
          </Typography>
        </Link>
        <IconButton
          variant="text"
          // color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 dark:text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                      }
                      // color="blue"
                      className={`flex items-center gap-4 px-4 capitalize dark:text-white ${' !isActive && "bg-[#359BEF]"'}`}
                      fullWidth
                    >
                      {icon}
                      <Typography className="font-medium capitalize dark:text-white">
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

export default SideNav;
