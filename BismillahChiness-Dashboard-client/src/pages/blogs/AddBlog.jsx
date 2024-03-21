import toast from "react-hot-toast";
import { modifyData } from "../../Hooks/Api";
import { useContext, useState } from "react";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import { AuthProvider } from "../../Authentication/AuthProvider";
import "./AddBlog.css";

const AddBlog = ({ refetch }) => {
  const { user } = useContext(AuthProvider);
  const [blogType, setBlogType] = useState("");

  const handleNewBlog = async (e) => {
    e.preventDefault();

    const form = e.target;
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const newBlog = {
      name: user?.displayName,
      title: form.title.value,
      type: blogType,
      date: formattedDate,
      authorImage: user?.photoURL,
      blogImage: form.image.value,
      post: form.post.value,
    };

    try {
      const res = await modifyData("/api/blog", "POST", newBlog);
      if (res) {
        toast.success("Blog Posted Successfully");
        form.reset();
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-br flex justify-center items-center">
      <div className="w-full max-w-3xl p-8">
        <div className="bg-white p-8 md:flex md:items-center">
          <div className="md:flex-shrink-0 mb-8 md:mb-0">
            {/* <Lottie
              animationData={blogImg}
              className="w-40 h-40 md:w-32 md:h-32"
            /> */}
          </div>
          <div className="md:ml-8 md:flex-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:text-4xl">
              Add Blog
            </h2>
            <form onSubmit={handleNewBlog} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <Input
                    color="blue"
                    className="text-black"
                    name="title"
                    variant="filled"
                    label="Blog Title"
                    placeholder="Type here.."
                    required
                  />
                </div>
                <div className="flex-1">
                  <Input
                    color="blue"
                    name="image"
                    variant="filled"
                    label="Image Link"
                    placeholder="Type here.."
                    required
                  />
                </div>
              </div>
              <div>
                <Select
                  color="blue"
                  required
                  name="type"
                  variant="filled"
                  label="Select Blog Type"
                  value={blogType}
                  onChange={(selectedValue) => {
                    setBlogType(selectedValue);
                  }}
                >
                  <Option value="Finance">Finance</Option>
                  <Option value="Banking">Banking</Option>
                  <Option value="Remittance">Remittance</Option>
                  <Option value="Loan">Loan</Option>
                  <Option value="Bank Account">Bank Account</Option>
                </Select>
              </div>
              <div>
                <Textarea
                  color="blue"
                  name="post"
                  variant="filled"
                  label="Write your post"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
