import { Link } from "react-router-dom";

export function DashboardFooter() {
  return (
    <footer className="flex dark:text-darkText px-3 w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <div className="font-normal dark:text-darkText">
        &copy; 2023 Secure-Savings
      </div>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <Link to={"aboutUs"}>
          <div className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            About Us
          </div>
        </Link>
        <li>
          <div className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            License
          </div>
        </li>
        <li>
          <div className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            Contribute
          </div>
        </li>
        <Link to={"/contact"}>
          <div className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
            Contact Us
          </div>
        </Link>
      </ul>
    </footer>
  );
}
