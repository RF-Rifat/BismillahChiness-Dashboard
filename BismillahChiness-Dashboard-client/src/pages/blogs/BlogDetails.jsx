import { useParams } from "react-router-dom";
import Spinner from "../../Shared/Spinner";
import useGetData from "../../Hooks/useGetData";
import { Input } from "@material-tailwind/react";

import AddComment from "./AddComment";
import Comments from "./comments/Comments";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, isLoading] = useGetData(`/api/blog/${id}`);
  // console.log(blogs);
  const { name, title, type, date, authorImage, blogImage, post } = blogs;

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-2">
        <h1 className="dark:text-white font-semibold text-5xl text-center mb-5">
          Blog Details
        </h1>
        <div className="flex w-52 mt-1 overflow-hidden rounded mx-auto mb-3 md:mb-14">
          <div className="flex-1 h-2 bg-teal-200"></div>
          <div className="flex-1 h-2 bg-teal-400"></div>
          <div className="flex-1 h-2 bg-teal-300"></div>
        </div>

        <div className=" flex flex-col lg:flex-row gap-5">
          <div className="px-8 ">
            <div className="container mx-auto lg:flex">
              <div className="mt-6 w-full  ">
                <div className="mb-12">
                  <img
                    src={blogImage}
                    alt="blog post"
                    className="rounded-lg shadow-xl mb-8"
                  />
                  <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-inherit">
                    {title}
                  </h4>

                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-inherit mb-4">
                    {post}
                  </p>
                  {/* <div className="flex items-center border-b pb-6">
                    <img
                      src={blogDetails?.authorImage}
                      alt="Added by"
                      className="inline-block relative object-cover object-center !rounded-full w-9 h-9 shadow"
                    />
                    <div>
                      <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-inherit ml-2">
                        {blogDetails?.name}
                      </h6>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* right side bar section */}
          <div className="hidden lg:block">
            <div className="w-full lg:w-80 ml-auto">
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
                <div className="p-6">
                  <form className="mt-4 lg:mt-0" target="_self" noValidate="">
                    <div className="mt-6 w-full lg:mt-0">
                      <div className="relative w-full min-w-[200px] h-10">
                        <Input
                          label="Search with blog title"
                          required=""
                          type="search"
                          name="search"
                          id="search"
                          className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border-[1.5px]  !bg-white !px-4 text-primary !ring-transparent placeholder:text-gray-600  focus:!border-t-primary focus:ring-primary/20"
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden">
                          {" "}
                          <span className="inline-block text-red-500 ml-0.5">
                            *
                          </span>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-4 rounded-lg text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shrink-0 bg-primary text-base font-medium capitalize md:w-full mt-4"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
                <div className="p-6">
                  <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4 uppercase">
                    Recommended Topics
                  </h6>
                  <div className="flex items-center justify-between mb-2">
                    <a href="/blog/tag/frameworks">
                      <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 hover:font-normal">
                        Latest Blog
                      </p>
                    </a>
                    <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900">
                      18
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
                <div className="p-6">
                  <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4 uppercase">
                    Latest Blog posts
                  </h6>
                  <ul>
                    <li className="mb-4">
                      <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900">
                        7 Reasons Why You Should Use Tailwind CSS Right Now
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* user's comment */}
        <div className="px-8">
          <Comments id={id}></Comments>
          {/* add comment  form*/}
          <div className="mt-10">
            <AddComment id={id}></AddComment>
          </div>
        </div>
      </div>

      {/* right side bar section for small + tab device */}

      <div className="px-8 lg:px-0 block lg:hidden">
        <div className="w-full lg:w-80 ml-auto">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
            <div className="lg:p-6">
              <form className="mt-4 lg:mt-0" target="_self" noValidate="">
                <div className="mt-6 w-full lg:mt-0">
                  <div className="relative w-full min-w-[200px] h-10">
                    <Input
                      label="Search with blog title"
                      required=""
                      type="search"
                      name="search"
                      id="search"
                      className="peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border-[1.5px]  !bg-white !px-4 text-primary !ring-transparent placeholder:text-gray-600  focus:!border-t-primary focus:ring-primary/20"
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900 hidden">
                      {" "}
                      <span className="inline-block text-red-500 ml-0.5">
                        *
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-2 px-4 rounded-lg text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none shrink-0 bg-primary text-base font-medium capitalize md:w-full mt-4"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
            <div className="lg:p-6">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4 uppercase">
                Recommended Topics
              </h6>
              <div className="flex items-center justify-between mb-2">
                <a href="/blog/tag/frameworks">
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 hover:font-normal">
                    Latest Blog
                  </p>
                </a>
                <p className="block antialiased font-sans text-sm font-light leading-normal text-blue-gray-900">
                  18
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-6">
            <div className="lg:p-6">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-4 uppercase">
                Latest Blog posts
              </h6>
              <ul>
                <li className="mb-4">
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900">
                    7 Reasons Why You Should Use Tailwind CSS Right Now
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
