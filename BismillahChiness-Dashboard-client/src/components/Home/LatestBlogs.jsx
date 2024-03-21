const LatestBlogs = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h2 className="md:text-5xl text-4xl from-black dark:text-darkText"></h2>
        <div className="px-4 md:text-center">
          <h2 className="pb-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-300">
            LATEST BLOGS
          </h2>
          <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-teal-200"></div>
            <div className="flex-1 h-2 bg-teal-400"></div>
            <div className="flex-1 h-2 bg-teal-300"></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-white dark:bg-dark font-[sans-serif]">
          <div className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
              <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                <img
                  src="https://i.postimg.cc/HsSPvTq8/pexels-fauxels-3184357.jpg"
                  alt="Blog Post 1"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white dark:bg-dark opacity-90">
                  <span className="text-sm block text-gray-600 dark:text-darkText mb-2">
                    10 FEB 2023 | BY JOHN DOE
                  </span>
                  <h3 className="text-xl font-bold dark:text-darkText text-[#333]">
                    A Guide to Igniting Your Imagination
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                    <p className="text-gray-600 dark:text-darkText text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis accumsan, nunc et tempus blandit, metus mi
                      consectetur felis turpis vitae ligula.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                <img
                  src="https://i.ibb.co/1nn2DtG/jonathan-cooper-0-O2-Pp6-m-Ok-Y-unsplash.jpg"
                  alt="Blog Post 2"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white dark:bg-dark opacity-90">
                  <span className="text-sm block dark:text-darkText text-gray-600 mb-2">
                    7 JUN 2023 | BY MARK ADAIR
                  </span>
                  <h3 className="text-xl font-bold dark:text-darkText text-[#333]">
                    Hacks to Supercharge Your Day
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                    <p className="text-gray-600 dark:text-darkText text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis accumsan, nunc et tempus blandit, metus mi
                      consectetur felis turpis vitae ligula.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                <img
                  src="https://i.ibb.co/GHtqp2q/towfiqu-barbhuiya-joq-WSI9u-XM-unsplash.jpg"
                  alt="Blog Post 3"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white dark:bg-dark opacity-90">
                  <span className="text-sm block text-gray-600 dark:text-darkText mb-2">
                    5 OCT 2023 | BY SIMON KONECKI
                  </span>
                  <h3 className="text-xl font-bold dark:text-darkText text-[#333]">
                    Trends and Predictions
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                    <p className="text-gray-600 dark:text-darkText text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis accumsan, nunc et tempus blandit, metus mi
                      consectetur felis turpis vitae ligula.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
