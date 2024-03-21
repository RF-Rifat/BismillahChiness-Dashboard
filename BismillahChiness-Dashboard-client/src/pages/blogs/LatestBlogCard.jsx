import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const LatestBlogCard = ({ blog }) => {
  const { date, _id, title, blogImage } = blog;
  return (
    <div>
      {" "}
      <Card className="w-full h-[190px] max-w-[500px] flex-row  bg-gray-50 font-poppins dark:bg-gray-800 hover:p-1 ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={blogImage}
            alt="blog-image"
            className="h-[190px] w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant=""
            color="gray"
            className="mb-4 uppercase text-gray-800  dark:text-gray-300"
          >
            {date}
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-gray-800  dark:text-gray-300"
          >
            {title.slice(0, 16)}..
          </Typography>

          <Link to={`/blog-details/${_id}`} className="inline-block">
            <Button
              variant="text"
              className="flex items-center gap-2 text-gray-800 dark:text-gray-300"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default LatestBlogCard;
