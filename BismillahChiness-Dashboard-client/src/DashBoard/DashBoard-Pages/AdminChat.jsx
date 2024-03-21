import { Avatar, Badge, Button, Input } from "@material-tailwind/react";
import { BsFillSendFill, BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import useGetData from "../../Hooks/useGetData";
import { io } from "socket.io-client";

const AdminChat = () => {
  const [userData] = useGetData("/api/user");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [chat, setChat] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    if (userData && userData.length > 0) {
      const filteredData = userData.filter(
        (user) => user.position === "Member"
      );
      setFilteredUsers(filteredData);
    }
  }, [userData]);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (data) => {
      console.log(data);
      setChat((prevChat) => [
        ...prevChat,
        {
          id: Date.now(),
          sender: data.sender,
          message: data.message,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    };

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket && messageInput.trim() !== "") {
      setMessageInput("");
      setChat((prevChat) => [
        ...prevChat,
        {
          id: Date.now(),
          sender: "admin",
          message: messageInput,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }
  };

  return (
    <section className="lg:grid grid-cols-12 relative">
      <aside className="h-full 2xl:col-span-3 xl:col-span-4 lg:col-span-5 bg-white dark:bg-black border border-b-gray-200 dark:border-darkblack-400 pr-7 pl-12 pt-6 pb-10 hidden lg:block">
        <header>
          <h3 className="text-2xl font-semibold text-bgray-900 dark:text-white mb-6">
            Messages
          </h3>
          <div className="relative">
            <Input
              type="text"
              className="w-full dark:placeholder:text-white dark:text-white bg-bgray-100 dark:bg-darkblack-500 border-0 focus:border focus:border-success-300 focus:ring-0 rounded-lg py-3.5 pl-12"
              label="Search Message"
            />
          </div>
        </header>
        <div className="pt-6">
          <ul className="pt-2 divide-y divide-bgray-300 dark:divide-darkblack-400">
            {filteredUsers.map((data) => (
              <li
                key={data._id}
                className={`p-3.5 flex justify-between hover:bg-bgray-100 hover:dark:bg-darkblack-500 hover:rounded-lg transition-all cursor-pointer ${
                  selectedUser && selectedUser._id === data._id
                    ? "bg-blue-200 dark:bg-blue-600 rounded"
                    : ""
                }`}
                onClick={() => handleUserClick(data)}
              >
                <div className="flex space-x-3 items-center">
                  <Badge color={data?.status ? "green" : "red"}>
                    <Avatar
                      src={data?.imageSrc}
                      alt="avatar"
                      variant="rounded"
                    />
                  </Badge>
                  <h4 className="text-xl font-bold text-bgray-900 dark:text-white">
                    {data.name}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="2xl:col-span-9 xl:col-span-8 dark:bg-darkblack-500 lg:col-span-7 col-span-12 relative h-[70vh]">
        <header className="bg-white dark:bg-darkblack-600 p-5 lg:pr-24 flex justify-between items-center border-t border-bgray-300 dark:border-darkblack-400">
          <div className="flex space-x-3 items-center">
            <Badge color={selectedUser?.status ? "green" : "red"}>
              <Avatar src={selectedUser?.imageSrc} />
            </Badge>
            <div>
              <h4 className="text-base font-bold text-bgray-900 dark:text-white">
                {selectedUser?.name}
              </h4>
              <span className="text-sm text-bgray-600">
                {selectedUser?.status ? "online" : "offline"}
              </span>
            </div>
          </div>
          <button
            aria-label="Options"
            type="button"
            className="dark:bg-darkblack-500 w-12 h-12 rounded-full grid place-items-center hover:bg-gray-200 dark:hover:bg-darkblack-400 transition-colors"
          >
            <BsThreeDotsVertical />
          </button>
        </header>
        <div className="lg:pt-20 dark:bg-darkblack-500 lg:px-11 p-5 mb-5 lg:mb-0 space-y-10 h-[50svh]">
          {/* Loop through chat messages and display them */}
          {chat.map((message) => (
            <div
              key={message.id}
              className={`flex justify-${
                message.sender === "admin" ? "end" : "start" // Corrected condition for message alignment
              } items-end space-x-3`}
            >
              <div className="flex space-x-3 items-center">
                <Avatar
                  src={
                    message.sender === "admin"
                      ? "https://lh3.googleusercontent.com/a/ACg8ocI9KP1WyhE4zyejd4hv7WgtMm4zKgDavXFqiTxByfZkorw=s96-c"
                      : selectedUser?.imageSrc
                  }
                  className="shrink-0"
                  alt=""
                />
                <div
                  className={`p-3 ${
                    message.sender === "admin"
                      ? "bg-green-300 rounded-r-lg rounded-b-lg dark:text-white"
                      : "bg-blue-200 dark:bg-blue-600 dark:text-white rounded-r-lg rounded-b-lg"
                  } text-gray-900 text-sm font-medium max-w-md`}
                >
                  {message.message}
                </div>
              </div>
              <div>
                <span className="text-xs text-bgray-500 font-medium">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:px-11 px-5 lg:mb-0 mb-5 w-full">
          <div className="flex justify-end mt-4 gap-4 items-center">
            <Input
              label="Type Message"
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button
              aria-label="Send Message"
              name="button"
              color="green"
              className="rounded-lg flex items-center justify-center px-4 py-2.5 font-semibold text-sm gap-1.5"
              onClick={sendMessage}
            >
              <BsFillSendFill className="h-6 w-6" />
              <span>Send</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminChat;
