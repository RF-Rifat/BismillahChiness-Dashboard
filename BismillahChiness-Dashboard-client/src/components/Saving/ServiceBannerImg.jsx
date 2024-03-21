/* eslint-disable react/prop-types */
import { useSpring, animated } from "react-spring";
import "./ServiceBannerImg.css";

const ServiceBannerImg = ({ img, header, para }) => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  return (
    <animated.section
      className="relative pb-8"
      style={{ height: 750, ...props }}
    >
      <div>
        <img
          src={img}
          className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full"
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/75">
          <div className="z-10 max-w-6xl px-4 mx-auto">
            <h2 className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
              {header}
            </h2>
            <p className="mb-8 text-base leading-8 text-gray-400 lg:text-xl">
              {para}
            </p>
            <div className="items-center justify-start block gap-4 md:flex">
              <a
                className="block px-5 py-3 mb-4 text-sm font-semibold text-center text-gray-100 transition duration-200 bg-blue-600 rounded md:mb-0 md:inline-block hover:bg-blue-700 "
                href="#"
              >
                {" "}
                Read More{" "}
              </a>
              <a
                className="block px-5 py-3 text-sm font-semibold text-center text-blue-700 transition duration-200 bg-white rounded md:inline-block hover:bg-blue-700 hover:text-gray-100"
                href="#"
              >
                {" "}
                Make an Appointment{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default ServiceBannerImg;
