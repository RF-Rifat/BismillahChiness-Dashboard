import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import ServiceBannerImg from "./ServiceBannerImg";

export default function SecureBanner() {
  const bannerData = [
    {
      header: "Bank with Confidence",
      para: "this statistic is based on our average personal current account online opening time from the last 12 month",
      img: "https://i.ibb.co/k9QWsjH/pexels-kindel-media-7007174.jpg",
    },
    {
      header: "Your Money, Your Way",
      para: "Our bank's average online personal current account opening time over the past 12 months is 15 minutes. We are committed to providing a quick and efficient account opening process for our customers. Experience the ease of opening your account online with us",
      img: "https://i.ibb.co/5vgCNPL/pexels-pixabay-259249.jpg",
    },
    {
      header: "Smart Banking",
      para: "Our commitment to innovation and customer satisfaction drives us to continually enhance our digital services. We understand the importance of your time, and our user-friendly online account opening process reflects our dedication to providing a quick, secure, and hassle-free experience for our valued customers.",
      img: "https://i.ibb.co/vJmJDNz/pexels-david-mcbee-730564.jpg",
    },
    {
      header: "Unlock Financial Freedom",
      para: "Whether you're a new customer or an existing one looking to expand your banking relationship with us, you can trust that opening a personal current account with SecureSavings is a seamless and prompt process. Join us in embracing the convenience of online banking and experience the difference with SecureSavings.",
      img: "https://i.ibb.co/Kj4J69Z/pexels-joslyn-pickens-3833052.jpg",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        grabCursor={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          speed: 800,
        }}
        loop={true}
        style={{ height: "90vh" }}
      >
        {bannerData.map((data) => (
          <SwiperSlide key={data.img} aria-disabled>
            <ServiceBannerImg
              img={data?.img}
              header={data?.header}
              para={data.para}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
