const SavingBanner = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="relative flex items-center justify-center w-full text-center bg-center bg-cover "
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg)",
            height: 600,
          }}
        >
          <div className="mx-4">
            <div className="z-10 max-w-3xl p-6 bg-gray-900 md:p-16 opacity-80">
              <div className="text-center">
                <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                  Open Our <span className="text-blue-600">Current</span>{" "}
                  Account Online
                </h2>
                <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                  This statistic is based on our average personal current
                  account online opening time from the last 12 months.
                </p>
                <div className="flex flex-wrap justify-center">
                  <button className="w-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded md:w-auto md:ml-2 hover:bg-blue-700">
                    Make an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavingBanner;
