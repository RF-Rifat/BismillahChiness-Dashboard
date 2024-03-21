import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import {
  FcCheckmark,
  FcGraduationCap,
  FcPositiveDynamic,
  FcVoicePresentation,
} from "react-icons/fc";
const BannerCard = () => {
  return (
    <section className="pb-20 bg-blue-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 dark:bg-dark w-full mb-8 shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105 dark:shadow-md dark:shadow-white">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <FcPositiveDynamic className="h-20 w-10" />
                </div>
                <h6 className="text-xl font-semibold">Awarded Agency</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 dark:bg-dark w-full mb-8 shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105 dark:shadow-md dark:shadow-white">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-400">
                  <FcGraduationCap className="w-12 h-12" />
                </div>
                <h6 className="text-xl font-semibold">Free Revisions</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 dark:bg-dark w-full mb-8 shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105 dark:shadow-md dark:shadow-white">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lime-700">
                  <FcCheckmark className="h-20 w-10" />
                </div>
                <h6 className="text-xl font-semibold">Verified Company</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-7/12 px-4 mr-auto ml-auto">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white dark:bg-dark">
              <FcVoicePresentation className="h-20 w-10" />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Empowering Your Financial Journey
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              At Secure-Savings, we believe that financial success is a journey,
              not a destination. Our commitment is to empower you with the tools
              and resources needed to achieve your financial goals.
            </p>
          </div>

          <Card className="mt-6 w-96 dark:bg-dark dark:text-darkText md:w-5/12">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 dark:text-darkText"
              >
                Our Journey: Crafting Exceptional Experiences
              </Typography>
              <Typography>
                At Secure-Saving, we pride ourselves on a journey that revolves
                around delivering exceptional financial experiences. From the
                very beginning, our commitment has been to provide a seamless
                and secure banking environment for our customers.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
