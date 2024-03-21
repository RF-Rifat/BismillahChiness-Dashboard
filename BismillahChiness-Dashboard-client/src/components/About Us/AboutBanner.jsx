import BannerCard from "./BannerCard";

const AboutBanner = () => {
  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[80svh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")',
            backgroundAttachment: "fixed",
          }}
        >
          <span className="w-full h-full absolute opacity-75 bg-black" />
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-blueGray-200 text-white">
                  At Secure-Saving, we believe in more than just financial
                  transactions – we believe in building lasting relationships.
                  With a commitment to excellence and a passion for innovation,
                  we are your dedicated financial partner, here to support you
                  on your journey to financial success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </div>
      <BannerCard />
    </>
  );
};

export default AboutBanner;
