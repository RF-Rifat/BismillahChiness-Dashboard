import Marquee from "react-fast-marquee";
import visa from "../assets/images/marqueeItems/visa.png";
import paypal from "../../src/assets/images/marqueeItems/paypal.png";
import gPay from "../../src/assets/images/marqueeItems/gPay.png";
import masterCard from "../../src/assets/images/marqueeItems/masterCard.png";

const MarqueeComp = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto  mt-10 mb-10">
      <div className="px-4 md:text-center">
        <h2 className="pb-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-300">
          Our Partner
        </h2>
        <div className="flex w-32 mt-1 overflow-hidden rounded md:mx-auto md:mb-14">
          <div className="flex-1 h-2 bg-teal-200"></div>
          <div className="flex-1 h-2 bg-teal-400"></div>
          <div className="flex-1 h-2 bg-teal-300"></div>
        </div>
      </div>
      <div>
        <Marquee className="mt-5" autoFill={true} pauseOnHover={true}>
          <img className="h-48 px-5 " src={visa} alt="" />
          <img className="h-36 px-5" src={masterCard} alt="" />
          <img className="h-36 px-5" src={paypal} alt="" />
          <img className="h-[100px] px-5" src={gPay} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComp;
