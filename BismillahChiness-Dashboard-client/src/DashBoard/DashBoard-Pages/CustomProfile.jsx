import { useContext, useState } from "react";
import { AdminDataContext } from "../../Context/AdminProvider";

import ProfileAddBlog from "../../components/DashBoard/ProfileAddBlog";
import BatteryStatus from "../../components/DashBoard/BatteryStatus";

export function CustomProfile() {
  const { LoggedUser, isAdmin, userAcc } = useContext(AdminDataContext);
  const { email, name, imageSrc } = LoggedUser[0] || {};

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleModalSubmit = () => {
    console.log("Submitted value:", inputValue);

    handleCloseModal();
  };

  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mx-3 mb-6 lg:mx-4 border border-blue-gray-100">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <div className="relative inline-flex">
                <img
                  src={imageSrc}
                  alt="bruce-mars"
                  className="inline-block relative object-cover object-center w-[74px] h-[74px] rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
                <span className="absolute min-w-[12px] min-h-[12px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-green-500 text-white" />
              </div>
              <div>
                <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-1">
                  {`${name}`}
                </h5>
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Admin
                </p>
              </div>
            </div>
            <div className="w-96">
              <div className="overflow-hidden block">
                <nav>
                  <ul
                    role="tablist"
                    className="flex relative bg-blue-gray-50 bg-opacity-60 rounded-lg p-1 flex-row"
                  >
                    <li
                      role="tab"
                      className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                      data-value="app"
                    >
                      <div className="z-20 text-inherit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="-mt-1 mr-2 inline-block h-5 w-5"
                        >
                          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                        App
                      </div>
                      <div
                        className="absolute inset-0 z-10 h-full bg-white rounded-md shadow"
                        data-projection-id={11}
                        style={{ opacity: 1 }}
                      />
                    </li>
                    <li
                      role="tab"
                      className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                      data-value="message"
                    >
                      <div className="z-20 text-inherit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="-mt-0.5 mr-2 inline-block h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Message
                      </div>
                    </li>
                    <li
                      role="tab"
                      className="flex items-center justify-center text-center w-full h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                      data-value="settings"
                    >
                      <div className="z-20 text-inherit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="-mt-1 mr-2 inline-block h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Settings
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
              <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none mx-0 mt-0 mb-4 flex items-center justify-between gap-4">
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                  Profile Information
                </h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 cursor-pointer text-blue-gray-500"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </div>
              <div className="p-0">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                  Hi, I&apos;m {`${name}`}, Decisions: If you can&apos;t decide,
                  the answer is no. If two equally difficult paths, choose the
                  one more painful in the short term.
                </p>
                <hr className="my-8 border-blue-gray-50" />
                <ul className="flex flex-col gap-4 p-0">
                  <li className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      first name:
                    </p>
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                      {`${name}`}
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      Secure-Service:
                    </p>
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                      A+
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      location:
                    </p>
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                      UpaZila- Brahmanbaria Sadar, District- Brahmanbaria
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                      social:
                    </p>
                    <div className="flex items-center gap-4">
                      <i className="fa-brands fa-facebook text-blue-700" />
                      <i className="fa-brands fa-twitter text-blue-400" />
                      <i className="fa-brands fa-instagram text-purple-500" />
                    </div>
                  </li>
                </ul>
                <hr className="my-8 border-blue-gray-50" />
                <div>
                  <a
                    href="#_"
                    className="relative px-5 py-2 font-medium text-white group"
                    onClick={handleButtonClick}
                  >
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#369BF0] group-hover:bg-purple-600 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#369BF0] group-hover:bg-purple-600 group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#369BF0] -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#369BF0] -rotate-12"></span>
                    <span className="relative">Activate Card</span>
                  </a>

                  {showModal && (
                    <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white dark:bg-dark p-8 rounded-lg">
                        <h2 className="text-lg font-bold mb-4 dark:text-white">
                          Activate Deactivated Card
                        </h2>
                        {/* <input
                          type="text"
                          placeholder="Enter card number"
                          value={inputValue}
                          onChange={handleInputChange}
                          className="border border-gray-300 p-2 mb-4 rounded-md"
                        /> */}
                        <form>
                          <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                              <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John"
                                required=""
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Doe"
                                required=""
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="company"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Company
                              </label>
                              <input
                                type="text"
                                id="company"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Flowbite"
                                required=""
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Phone number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="123-45-678"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required=""
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="website"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Website URL
                              </label>
                              <input
                                type="url"
                                id="website"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="flowbite.com"
                                required=""
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="visitors"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Unique visitors (per month)
                              </label>
                              <input
                                type="number"
                                id="visitors"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required=""
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="john.doe@company.com"
                              required=""
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="password"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="•••••••••"
                              required=""
                            />
                          </div>
                          <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                type="checkbox"
                                defaultValue=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required=""
                              />
                            </div>
                            <label
                              htmlFor="remember"
                              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              I agree with the{" "}
                              <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                              >
                                terms and conditions
                              </a>
                              .
                            </label>
                          </div>
                        </form>
                        <div className="flex justify-end">
                          <button
                            onClick={handleCloseModal}
                            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleModalSubmit}
                            className="px-4 py-2 bg-[#369BF0] text-white rounded-md"
                          >
                            Confirm Activate
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <BatteryStatus />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
              <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                  <div className="flex items-center">
                    <p className="mb-0 dark:text-white/80">Edit Profile</p>
                    <button
                      // eslint-disable-next-line react/no-unknown-property
                      rounded="false"
                      // eslint-disable-next-line react/no-unknown-property
                      block="false"
                      className="select-none font-sans uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in"
                      type="button"
                    >
                      Settings
                    </button>
                  </div>
                </div>
                <div className="flex-auto p-6">
                  <p className="leading-normal uppercase dark:text-white dark:opacity-60 text-sm">
                    User Information
                  </p>
                  <form className="w-full grid md:grid-cols-2 gap-4">
                    <div className="mb-1 flex flex-col gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                        Your email
                      </p>
                      <div className="relative w-full min-w-[200px] h-11">
                        <input
                          placeholder="support@gmail.com"
                          disabled=""
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                          defaultValue={`${email}`}
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none">
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div className="mb-1 flex flex-col gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                        Your name
                      </p>
                      <div className="relative w-full min-w-[200px] h-11">
                        <input
                          required=""
                          placeholder="Rifat"
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                          defaultValue={`${name}`}
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none">
                          {" "}
                          <span className="inline-block text-red-500 ml-0.5">
                            *
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-1 flex flex-col gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                        Avatar
                      </p>
                      <div className="relative w-full min-w-[200px] h-11">
                        <input
                          required=""
                          placeholder="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900  !border-t-blue-gray-200 focus:!border-t-gray-900"
                          defaultValue={imageSrc}
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 before:content-none after:content-none">
                          {" "}
                          <span className="inline-block text-red-500 ml-0.5">
                            *
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="mb-1 flex flex-col gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                        Blood Group
                      </p>
                      <div className="relative w-full min-w-[200px] h-10">
                        <button
                          type="button"
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          role="combobox"
                        >
                          <span className="absolute top-2/4 -translate-y-2/4 left-3 pt-0.5" />
                          <div className="grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-gray-400 rotate-0 -translate-y-2/4 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </button>
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-sm peer-disabled:text-blue-gray-400 leading-[3.75] text-blue-gray-400 before:border-transparent after:border-transparent">
                          B+
                        </label>
                      </div>
                    </div>
                    <div className="mb-1 flex flex-col gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                        District
                      </p>
                      <div className="relative w-full min-w-[200px] h-10">
                        <button
                          type="button"
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          role="combobox"
                        >
                          <span className="absolute top-2/4 -translate-y-2/4 left-3 pt-0.5" />
                          <div className="grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-gray-400 rotate-0 -translate-y-2/4 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </button>
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-sm peer-disabled:text-blue-gray-400 leading-[3.75] text-blue-gray-400 before:border-transparent after:border-transparent">
                          Brahmanbaria
                        </label>
                      </div>
                    </div>
                    <div className="mb-1 flex flex-col gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
                        Upazila
                      </p>
                      <div className="relative w-full min-w-[200px] h-10">
                        <button
                          type="button"
                          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          role="combobox"
                        >
                          <span className="absolute top-2/4 -translate-y-2/4 left-3 pt-0.5" />
                          <div className="grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-gray-400 rotate-0 -translate-y-2/4 transition-all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </button>
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-sm peer-disabled:text-blue-gray-400 leading-[3.75] text-blue-gray-400 before:border-transparent after:border-transparent">
                          Brahmanbaria Sadar
                        </label>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <button
                        type="submit"
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
                      >
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProfileAddBlog />
      </div>
    </>
  );
}

export default CustomProfile;
