import { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader } from "@material-tailwind/react";
import "./ClientsStyle.css";

const Clients = () => {
  const [ClientData, setClientData] = useState([]);

  useEffect(() => {
    fetch("clientsData.json")
      .then((res) => res.json())
      .then((data) => setClientData(data));
  }, []);

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

        <div className="container">
          <div className="px-4 md:text-center">
            <h2 className="pb-2 text-2xl font-bold md:text-4xl text-gray-300">
              Meet Our Team
            </h2>
            <div className="flex w-32 mt-1 overflow-hidden rounded md:mx-auto mb-4 md:mb-14">
              <div className="flex-1 h-2 bg-teal-200"></div>
              <div className="flex-1 h-2 bg-teal-400"></div>
              <div className="flex-1 h-2 bg-teal-300"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center relative mx-auto container ">
            {ClientData.map((person) => (
              <Card key={person.name} className="dark:bg-dark">
                <CardHeader floated={false} className="h-72">
                  <img
                    className="object-cover h-full w-72"
                    src={person?.image}
                    alt="profile-picture"
                  />
                </CardHeader>
                <div className="text-center pt-4">
                  <div className="dark:text-darkText font-semibold text-2xl">
                    {person.name}
                  </div>
                  <div className="font-medium dark:text-darkText">
                    {person.role}
                  </div>
                  <div className="flex justify-center gap-3 flex-wrap px-6">
                    {person?.skills.map((skill) => (
                      <div className="dark:text-darkText" key={skill}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <div className="flex gap-4">
                    <ul className="wrapper">
                      <li className="icon facebook">
                        <a
                          href="https://www.facebook.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="tooltip">Facebook</span>
                          <span>
                            <i className="fab fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li className="icon instagram">
                        <a
                          href="https://www.instagram.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="tooltip">Instagram</span>
                          <span>
                            <i className="fab fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li className="icon youtube">
                        <a
                          href="https://www.youtube.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <span className="tooltip">YouTube</span>
                          <span>
                            <i className="fab fa-youtube"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </CardFooter>
              </Card>
            ))}
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
    </>
  );
};

export default Clients;
