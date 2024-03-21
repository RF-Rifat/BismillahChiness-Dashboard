/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  //   console.log(blog);
  const { _id, title, date, type, authorImage, blogImage, post, name } = blog;
  // console.log(blog);
  return (
    <div>
      <section className="flex items-center   h-[650px]  dark:bg-gray-800">
        <div className="p-4">
          <div className="">
            <div className="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
              <div className="relative overflow-hidden h-72">
                <span className="absolute px-3 py-1 text-xs text-white bg-blue-500 rounded bottom-3 right-3">
                  {type}
                </span>
                <img
                  className="object-cover  h-full transition-all hover:scale-110"
                  src={blogImage}
                  alt=""
                />
              </div>
              <div className="relative z-20 p-8 -mt-16 ">
                <div className="flex items-center">
                  <img
                    className="object-cover w-20 h-20 mb-4 border-4 border-white rounded-full dark:border-gray-700"
                    src={authorImage}
                    alt=""
                  />
                  <div className="flex flex-col items-center ml-2">
                    <span className="block mt-3 mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                      {name} <br /> • {date}
                    </span>
                  </div>
                </div>
                <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                  {title}
                </h2>
                <p className="mb-4 text-base leading-7 dark:text-gray-400">
                  {post?.slice(0, 40)}
                  {"  "} . . .
                </p>
                <Link
                  to={`/blog-details/${_id}`}
                  className="flex items-center text-sm font-semibold"
                >
                  <div className="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="ml-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
