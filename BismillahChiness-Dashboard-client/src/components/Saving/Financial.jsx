const Financial = () => {
  return (
    <div>
      <div>
        <div className="px-4 mb-2 md:text-center md:mb-20">
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
            Our activities
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-teal-200"></div>
            <div className="flex-1 h-2 bg-teal-400"></div>
            <div className="flex-1 h-2 bg-teal-300"></div>
          </div>
        </div>
      </div>
      <section className="flex items-center bg-stone-100 lg:h-screen font-poppins dark:bg-gray-800 mb-24">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                Financial Guidance for Every Stage of Life.
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                At SecureSavings, we are committed to empowering our customers
                with personalized financial solutions tailored to their needs.
                From everyday banking services to investment opportunities, we
                strive to provide reliable and innovative financial products and
                services
              </p>

              <button className="before:ease relative h-12 w-40 overflow-hidden border-2 rounded-sm border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
                <span className="relative z-10">Discover More</span>
              </button>
            </div>
            <div className="relative lg:max-w-md">
              <img
                src="https://i.ibb.co/JBnd379/pexels-kampus-production-8353790.jpg"
                alt="aboutimage"
                className="relative z-10 object-cover w-full rounded h-96"
              />
              <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                <p className="text-lg font-semibold md:w-72">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>{" "}
                  Successfully Providing services from 5 years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financial;
