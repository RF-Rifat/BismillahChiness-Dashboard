const OnlineBanking = () => {
  return (
    <div>
      <div className="text-center mt-20">
        <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
          Online Banking
        </h2>
        <div className="flex w-44 mt-1 overflow-hidden rounded mb-2 mx-auto md:mb-5">
          <div className="flex-1 h-2 bg-teal-200"></div>
          <div className="flex-1 h-2 bg-teal-400"></div>
          <div className="flex-1 h-2 bg-teal-300"></div>
        </div>
      </div>
      <section className="flex items-center bg-gray-50 lg:h-screen font-poppins dark:bg-gray-900 ">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            <div className="relative bg-white rounded-2xl dark:bg-gray-700">
              <div className="w-full h-56 px-4 pt-4">
                <img
                  src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div>
                <div className="p-4">
                  <div className="mb-3">
                    <a href="">
                      <h2 className="text-2xl font-semibold dark:text-gray-300">
                        Digital Banking
                      </h2>
                    </a>
                  </div>
                  <p className="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                    We will take you different places of nepal and will
                    translate japanese to english entertain ...
                  </p>
                </div>
                <div className="flex items-center justify-end ">
                  <a
                    href="#"
                    className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl dark:bg-gray-700">
              <div className="w-full h-56 px-4 pt-4 ">
                <img
                  src="https://i.postimg.cc/s2tvtrPF/first.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div>
                <div className="p-4">
                  <div className="mb-3">
                    <a href="">
                      <h2 className="text-2xl font-semibold dark:text-gray-300">
                        Mobile & Web Banking
                      </h2>
                    </a>
                  </div>
                  <p className="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                    We will take you different places of nepal and will
                    translate japanese to english entertain ...
                  </p>
                </div>
                <div className="flex items-center justify-end ">
                  <a
                    href="#"
                    className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-2xl dark:bg-gray-700">
              <div className="w-full h-56 px-4 pt-4 ">
                <img
                  src="https://i.postimg.cc/Qdhgyp8g/second.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>
              <div>
                <div className="p-4">
                  <div className="mb-3">
                    <a href="">
                      <h2 className="text-2xl font-semibold dark:text-gray-300">
                        Insurance Policies
                      </h2>
                    </a>
                  </div>
                  <p className="pb-16 text-base font-base text-gray-700 dark:text-gray-400">
                    We will take you different places of nepal and will
                    translate japanese to english entertain ...
                  </p>
                </div>
                <div className="flex items-center justify-end ">
                  <a
                    href="#"
                    className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-indigo-600 rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineBanking;
