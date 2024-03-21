import EmiCalculator from "../components/Home/EmiCalculator";

import Features from "../components/Home/Features";

import Banner from "../components/Home/Banner";
import MarqueeComp from "../components/MarqueeComp";
import LatestBlogs from "../components/Home/LatestBlogs";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <MarqueeComp></MarqueeComp>
      <Features />
      <LatestBlogs />
      <EmiCalculator />
      <Testimonial/>
    </div>
  );
};

export default Home;
