import useGetData from "../../Hooks/useGetData";
import Spinner from "../../Shared/Spinner";
import LatestBlogCard from "./LatestBlogCard";

const LatestBlog = () => {
  const [blogs, isLoading] = useGetData("/api/blog");
  // console.log(blogs);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 ">
        {blogs.map((blog) => (
          <LatestBlogCard key={blog._id} blog={blog}></LatestBlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
