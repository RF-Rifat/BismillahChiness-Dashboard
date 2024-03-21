import { useEffect, useState } from "react";
import "./FeaturesStyle.css";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    // <div className="px-2 mt-32">
    //   <div className="text-center mt-20">
    //     <div className="px-4 md:text-center">
    //       <h2 className="py-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-300">
    //         Online Banking at your <br /> fingerprints
    //       </h2>
    //       <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto md:mb-14">
    //         <div className="flex-1 h-2 bg-teal-200"></div>
    //         <div className="flex-1 h-2 bg-teal-400"></div>
    //         <div className="flex-1 h-2 bg-teal-300"></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl mx-auto gap-5 mt-16">
    //     {features.map((feature) =>
    //       <main className="main" key={feature.id}>
    //         <div className="container">
    //           <div
    //             className="card dark:!bg-dark"
    //             style={{
    //               "--clr": "#009688",
    //             }}
    //           >
    //             <div className="img-box">
    //               <img
    //                 src={feature.img}
    //                 className="w-full h-full object-cover"
    //                 alt="Image"
    //               />
    //             </div>
    //             <div className="content">
    //               <h2 className="dark:!text-darkText">{feature.title}</h2>
    //               <p className="dark:!text-darkText">{feature.description}</p>
    //               <a href="">Read More</a>
    //             </div>
    //           </div>
    //         </div>
    //       </main>
    //     )}
    //   </div>
    // </div>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mt-20">
        <div className="px-4 md:text-center">
          <h2 className="py-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-300">
            Online Banking at your <br /> fingerprints
          </h2>
          <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-teal-200"></div>
            <div className="flex-1 h-2 bg-teal-400"></div>
            <div className="flex-1 h-2 bg-teal-300"></div>
          </div>
        </div>
      </div>

      <div
        className="px-4 lg:p-0 w-full wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="w-full xl:w-1/2">
          <img
            src="/image/feature-img.png"
            className="h-auto object-contain object-center align-middle mt-16 xl:mt-0"
            alt=""
          />
        </div>
        <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 text-indigo-900">
          <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/image/globalIcon-1.png" alt="" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-indigo-900 dark:text-darkText">
              Peace of Mind
            </h3>
            <p className="max-w-lg dark:text-darkText">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
          <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/image/globalIcon-2.png" alt="" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-indigo-900 dark:text-darkText">
              Business-Ready
            </h3>
            <p className="max-w-lg dark:text-darkText">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
          <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/image/globalIcon-3.png" alt="" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-indigo-900 dark:text-darkText">
              100% Transparent
            </h3>
            <p className="max-w-lg dark:text-darkText">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
          <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/image/globalIcon-4.png" alt="" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-indigo-900 dark:text-darkText">
              International Network
            </h3>
            <p className="max-w-lg dark:text-darkText">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
