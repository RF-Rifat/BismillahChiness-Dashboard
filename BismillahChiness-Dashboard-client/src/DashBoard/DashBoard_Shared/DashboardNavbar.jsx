import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  BellIcon,
  ClockIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { useContext } from "react";
import { setOpenSidenav, useMaterialTailwindController } from "../../Context";

import ToggleTheme from "../../components/ToggleTheme";
import { AuthProvider } from "../../Authentication/AuthProvider";
import { useSelector } from "react-redux";

export function DashboardNavbar() {
  const { user, logOut } = useContext(AuthProvider);
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const count = useSelector((state) => state.counter.value);
  const email = user?.email;
  const donorsReq = [];

  //   const { _id } = filteredUser || {};

  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const handleLogOut = async (email) => {
    logOut(email);
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://blood-bond-server-nine.vercel.app/bloodDonation"
  //         );
  //         setDonorsReq(response.data);
  //       } catch (error) {
  //         setError(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <Navbar
      color="white"
      className={`dark:bg-dark rounded-xl transition-all sticky top-8 ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/dashboard/home`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="dark:text-white font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal dark:text-white"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h6"
            color="blue-gray"
            className="dark:text-white"
          >
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          <div className="mr-auto md:mr-4 md:w-56">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <ToggleTheme />
          {!user ? (
            <Link to="/login">
              <Button
                variant="text"
                color="blue-gray"
                className="hidden items-center gap-1 px-4 xl:flex normal-case"
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                Sign In
              </Button>
              <IconButton
                variant="text"
                color="blue-gray"
                className="grid xl:hidden"
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </Link>
          ) : (
            <>
              <Button
                onClick={() => handleLogOut(email)}
                variant="text"
                color="blue-gray"
                className="hidden items-center gap-1 px-4 xl:flex normal-case"
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                Log Out
              </Button>
              <IconButton
                onClick={() => handleLogOut(email)}
                variant="text"
                color="blue-gray"
                className="grid xl:hidden"
              >
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </>
          )}
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray" className="relative">
                <BellIcon className="h-5 w-5 text-blue-gray-500" />
                <span className="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[12px] min-h-[12px]">
                  {/* {donorsReq.length} */}
                  <span>{count}</span>
                </span>
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              {donorsReq.map((item, idx) => (
                <MenuItem key={idx} className="flex items-center gap-3">
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-1 font-normal"
                    >
                      <strong>New Request</strong> from {item.fullName}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center gap-1 text-xs font-normal opacity-60"
                    >
                      <ClockIcon className="h-3.5 w-3.5" /> {item.preferredDate}
                    </Typography>
                  </div>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          {/* <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton> */}
        </div>
      </div>
    </Navbar>
  );
}

export default DashboardNavbar;
