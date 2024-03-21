import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "./Banner.css";
import CreateAccount from "./createAccount";
import CreateCreditCard from "./CreateCreditCard";

const Banner = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const handleSlideChange = (swiper) => {
  //   const imageData = imageArray[swiper.realIndex];
  //   setCurrentSlide(imageData);
  // };

  const imageArray = [
    "https://i.postimg.cc/wMXFJH3b/worldbankday.png",
    "https://i.postimg.cc/Z5LV7Tb8/cards.png",
    "https://i.postimg.cc/fTwR6NYz/homeLoan.png",
    "https://i.postimg.cc/QxLDj0NG/Financial-Planning-Services-Instagram-Post.png",
  ];
  return (
    <div className="2xl:flex px-6 justify-between lg:my-10 gap-6 max-w-screen-2xl mx-auto p-4">
      <div className="grid py-6 lg:py-24 items-center space-y-5 text-center 2xl:text-left 2xl:w-1/2">
        <h4 className="text-2xl lg:text-2xl text-green-500 font-semibold">
          Simple. Transparent. Secure
        </h4>
        <h2 className="text-2xl lg:text-5xl font-bold">
          <span className="text-red-500">1348+</span> Branch and Sub-branch
        </h2>
        <p className="text-2xl">Believing, Banking and Achieving Different</p>
        <div className="flex lg:gap-10 justify-around 2xl:justify-start">
          <CreateAccount />
          <CreateCreditCard />
        </div>
      </div>
      <div className="2xl:w-1/2 my-auto">
        <Swiper
          // onSlideChange={handleSlideChange}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            speed: 800,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            speed: 800,
            effectParams: {
              cubicBezier: "0.16, 1, 0.3, 1",
            },
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {imageArray.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img className="rounded" src={imageUrl} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <img src="https://i.postimg.cc/wMXFJH3b/worldbankday.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/Z5LV7Tb8/cards.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/fTwR6NYz/homeLoan.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/QxLDj0NG/Financial-Planning-Services-Instagram-Post.png" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
