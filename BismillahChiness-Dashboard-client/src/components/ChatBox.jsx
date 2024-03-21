import { Fragment, useContext, useEffect, useState } from "react";
import "./ChatBox.css";
import { TbMessageCircle2 } from "react-icons/tb";
import { MdOutlineAddReaction } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi2";
import useAuth from "../Hooks/useAuth";
import { BsSend } from "react-icons/bs";
import { io } from "socket.io-client";
import { AdminDataContext } from "../Context/AdminProvider";

const ChatBox = () => {
  const socket = io("https://securesavings-2.onrender.com");
  const [chat, setChat] = useState([]);
  const AdminAuth = useContext(AdminDataContext);
  const { isAdmin } = AdminAuth;

  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(true);
  const { authInfo } = useAuth();
  const info = authInfo?.user || {};
  const { displayName, email } = authInfo?.user || {};
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSendClick = () => {
    socket.emit("sendMessage", {
      message: inputValue,
      sender: info?.reloadUserInfo,
    });
    setChat((prevChat) => [
      ...prevChat,
      {
        id: Date.now(),
        send: inputValue,
      },
    ]);

    setInputValue("");
  };

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
      setChat((prevChat) => [
        ...prevChat,
        {
          id: Date.now(),
          reply: data.message,
        },
      ]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  useEffect(() => {
    const chatInit = (selector) => {
      if (window.LIVE_CHAT_UI) {
        let chat = document.getElementById(selector);
        let toggles = chat.querySelectorAll(".toggle");

        window.setTimeout(() => {
          chat.classList.add("is-active");
        }, 1000);

        toggles.forEach((toggle) => {
          toggle.addEventListener("click", () => {
            chat.classList.add("is-active");
          });
        });

        document.onkeydown = function (evt) {
          evt = evt || window.event;
          var isEscape = false;
          if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
          } else {
            isEscape = evt.keyCode === 27;
          }
          if (isEscape) {
            chat.classList.remove("is-active");
          }
        };

        window.LIVE_CHAT_UI = true;
      }
    };

    chatInit("chat-app");
  }, []);

  return (
    <div className="main z-50">
      <div
        id="chat-app"
        className={`chat-app w-0 h-0 ${
          !open && "is-active h-[75svh] !w-[350px]"
        }`}
      >
        <div className="chat-app_toggle toggle">
          <div className="icon send" onClick={handleSendClick}>
            {/* send icon */}
            <BsSend />
          </div>
          <div className="icon open" onClick={() => setOpen(!open)}>
            <TbMessageCircle2 />
            {/* <FcSms /> */}
          </div>
        </div>
        <div className="chat-app_box h-[75svh]">
          <div className="chat-app_header">
            <div
              className="close"
              onClick={() => {
                setOpen(!open);
              }}
            />
            <div className="branding">
              <div className="avatar is-online">
                <img src={info?.reloadUserInfo?.photoUrl} alt="" />
              </div>
              <div className="content">
                <p className="title">{displayName}</p>
                <p className="subtitle">{email}</p>
              </div>
            </div>
          </div>
          <div className="chat-app_content">
            <div className="messages">
              {!isAdmin && (
                <div className="message reply">
                  <p className="text"> How can i help you today ?</p>
                </div>
              )}
              {chat.map((message) => (
                <Fragment key={message.id}>
                  <div className={message?.send && "message"}>
                    <p className={message?.send && "text"}>{message?.send}</p>
                  </div>
                  <div className={message?.reply && "message reply"}>
                    <p className={message?.send && "text"}>{message?.reply}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="chat-app_footer">
            <div className="tools">
              <a className="button-icon">
                <MdOutlineAddReaction className="h-5 w-5 hover:text-green-700" />
              </a>
              <a className="button-icon">
                <HiOutlinePaperClip className="h-5 w-5 icon !hover:text-white" />
              </a>
              <a className="copyright">Talk With Manager</a>
            </div>
            <input
              onChange={handleInputChange}
              value={inputValue}
              className="chat-input"
              type="text"
              placeholder="Type..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
