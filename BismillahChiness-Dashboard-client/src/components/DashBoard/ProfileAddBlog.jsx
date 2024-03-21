import { Button } from "@material-tailwind/react";
import useGetUserData from "../../Hooks/useGetUserData";
import { AddBlogModal } from "./AddBlogModal";
import { Link } from "react-router-dom";

const ProfileAddBlog = () => {
  const [blogData, refetch, isPending] = useGetUserData("/api/blog");
  if (isPending) {
    return <div className="text-4xl">loading</div>;
  }
  return (
    <>
      <div className="flex-none w-full max-w-full px-3 mt-6">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 rounded-t-2xl">
            <h6 className="mb-1 dark:text-white">Blogs</h6>
            <p className="leading-normal text-sm dark:text-white dark:opacity-80">
              Posted by Admins
            </p>
          </div>
          <div className="flex-auto p-4">
            <div className="flex flex-wrap gap-2 justify-between">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogData?.length > 0 &&
                  blogData?.map((item) => (
                    <div
                      key={item?._id}
                      className="w-full flex-grow max-w-full px-3 mb-6 md:flex-none"
                    >
                      <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
                        <div className="relative">
                          <a className="block shadow-xl rounded-2xl">
                            <img
                              src={item?.blogImage}
                              alt="img-blur-shadow"
                              className="max-w-full shadow-soft-2xl rounded-2xl"
                            />
                          </a>
                        </div>
                        <div className="flex-auto px-1 pt-6">
                          <p className="relative z-10 mb-2 leading-normal bg-gradient-to-tl from-gray-900 to-gray-900-800 text-sm bg-clip-text dark:opacity-80">
                            {item?.title}{" "}
                          </p>
                          <a href="javascript:;">
                            <h5 className="dark:text-white">{item?.name}</h5>
                          </a>
                          <p className="mb-6 leading-normal text-sm dark:text-white dark:opacity-60">
                            {item?.post?.length > 80
                              ? `${item?.post.substring(0, 100)}...`
                              : item?.post}
                          </p>
                          <div className="flex items-center justify-between">
                            <Link to={`/blog-details/${item?._id}`}>
                              <Button type="button" color="blue">
                                View Post
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <AddBlogModal refetch={refetch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAddBlog;
