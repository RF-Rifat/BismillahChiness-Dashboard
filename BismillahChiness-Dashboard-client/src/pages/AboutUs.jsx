import { FcBullish, FcMiddleBattery, FcServices } from "react-icons/fc";
import AboutBanner from "../components/About Us/AboutBanner";
import Clients from "../components/About Us/Clients";
import AboutUsContact from "../components/About Us/AboutUsContact";

const AboutUs = () => {
  return (
    <>
      <main>
        <AboutBanner />
        <Clients />
        <section className="pt-20 lg:pt-6 relative block bg-blue-gray-300 dark:bg-dark">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-12">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                
                <div className="px-4 md:text-center">
                  <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
                    Build something
                  </h2>
                  <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto md:mb-14">
                    <div className="flex-1 h-2 bg-teal-200"></div>
                    <div className="flex-1 h-2 bg-teal-400"></div>
                    <div className="flex-1 h-2 bg-teal-300"></div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FcServices className="h-12 w-12" />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excellent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FcBullish className="h-12 w-12" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FcMiddleBattery className="h-12 w-12" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutUsContact />
      </main>
    </>
  );
};

export default AboutUs;
