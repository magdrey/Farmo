"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Message {
  text: string;
  fromUser: boolean;
}

const Page = () => {
  // {text: "bitch ass nigga", fromUser: true}
  const [messages, setMessages] = useState<Message[]>([
    { text: "b", fromUser: true },
    { text: "wad  wad", fromUser: false },
    { text: "tf is you", fromUser: true },
    { text: "b a n", fromUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [prompts, setPrompts] = useState<Message[][]>([]);
  const [darkmode, setDarkmode] = useState(false);
  const [ham, setHam] = useState(false);

  const notfed = () => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Forgive me boss, i can't respond to your shi yet, i am just an interface",
          fromUser: false,
        },
      ]);
    }, 1000);
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return; // Don't send empty messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputValue, fromUser: true },
    ]);
    setInputValue("");
    notfed();

    // Logic to send message to bot and receive response
    // Example:
    // const response = await sendMessageToBot(inputValue);
    // setMessages([...messages, { text: response, fromUser: false }]);
  };

  const newprompt = () => {
    setPrompts([...prompts, messages]);
    setMessages([]);
  };
  const selectprompt = (index: any) => {
    setPrompts([...prompts, messages]);
    setMessages(prompts[index]);
  };
  const switchmode = () => {
    setDarkmode(!darkmode);
  };
  const clickham = () => {
    setHam(!ham);
  };

  return (
    <div
      className={
        darkmode
          ? "w-full smallH flex flex-col md:flex-row bg-black darkmode"
          : "w-full smallH flex flex-col md:flex-row lightmode"
      }
    >
      <div
        className={
          darkmode
            ? "chatsidebar md:w-[20%] bg-black md:h-[100vh]"
            : "chatsidebar md:w-[20%] bg md:h-[100vh]"
        }
      >
        <div className="sidename ml-4 mt-2 h-[5%]">
          {" "}
          <Link href={"/"}> Farmo </Link>{" "}
        </div>
        <div
          onClick={clickham}
          className={ham ? "hamburger hamburgeractive" : " hamburger "}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div
          className={
            ham ? "chatbar chatbaractive  h-[95%] " : "chatbar  h-[95%]"
          }
        >
          <div className=" ai flex bgs flex-col w-full h-[60%] ">
            <div className="flex h-[15%] w-auto mx-4 md:mx-auto">
              <p
                className={
                  " bg-green-800 rounded-full w-[2rem] h-[2rem] my-auto"
                }
              ></p>
              <div className="flex flex-col ml-2 my-auto">
                <p>Farmo</p>
                <p className="text-xs">Your Ai Agricultural Assistant</p>
              </div>
            </div>
            <div className=" py-2 w-full h-[85%] flex flex-col gap-2 overflow-y-scroll  ">
              {prompts.map((message, index) => (
                <div
                  key={index}
                  onClick={() => selectprompt(index)}
                  className={
                    " w-[80%] mx-4 prompt flex rounded-lg cursor-pointer "
                  }
                >
                  {message[0] && message[0].text ? (
                    <p className="truncate prompt text-sm rounded-lg px-4 py-[0.2rem]">
                      {message[0].text}
                    </p>
                  ) : (
                    <p className="truncate prompt text-sm rounded-lg px-4 py-[0.2rem]">
                      empty chat
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="help h-[20%] border-t border-gray-100 mx-4 pt-4">
            <p>help</p>
            <Link href={"/terms"}>
              {" "}
              <p>term of use</p>
            </Link>

            <Link href={"/privacyPolicy"}>
              <p>privacy policy</p>
            </Link>
          </div>
          <div className="upgrade py-8 justify-end h-[20%]">
            {" "}
            upgrade to farmo plus{" "}
          </div>
        </div>
      </div>
      <div className="chat-cont md:w-[80%] h-full md:h-[100vh] bg ">
        <div className="chatinner-cont  w-[90%] h-full  bg mx-auto ">
          <div className="chat-head md:h-[15%]  flex border-b border-gray-300 py-8 ">
            <div className=" w-full h-[3rem] my-auto flex justify-between">
              <div className="flex my-auto">
                <p className={" bg rounded-full w-[2rem] h-[2rem] my-auto"}></p>
                <div className="flex flex-col ml-2 my-auto">
                  <p>Hello, User</p>
                  <p className="text-sm hidden md:flex">
                    Get personalized answers to your Agricultural questions
                  </p>
                </div>
              </div>
              <div className="flex my-auto gap-4">
                <button
                  onClick={newprompt}
                  className="px-[1rem] py-[0.5rem] rounded-lg flex shadow-lg"
                >
                  {" + "}
                  <p className=" ml-2 hidden md:flex">generate new prompt</p>
                </button>
                <div onClick={switchmode} className="lightswitch my-auto">
                  <div className="Lswitch"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat h-[85%] justify-between w-full flex flex-col">
            <div className="messagebox px-4 py-2 w-full h-[80%] mt-8 bg flex flex-col gap-2 overflow-y-scroll  ">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.fromUser
                      ? " w-full flex justify-end"
                      : "w-full flex "
                  }
                >
                  <div
                    className={
                      message.fromUser
                        ? "user-message text-sm rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-lg"
                        : "bot-message text-sm order-last rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg"
                    }
                  >
                    {message.text}
                  </div>
                  <div
                    className={
                      message.fromUser
                        ? " bg-blue-800 rounded-full w-[2rem] h-[2rem] ml-2"
                        : "bg-green-900 rounded-full w-[2rem] h-[2rem] mr-2"
                    }
                  ></div>
                </div>
              ))}
            </div>
            <div className="inputsection flex flex-col justify-center w-[90%] md:w-[55rem] mx-auto bottom-[1rem]  h-[20%]">
              <span className="inputbox w-full flex  mx-auto h-[3rem]">
                <input
                  type="text"
                  className="text-black w-full px-2 overflow-x-scroll pr-20 rounded-lg h-[3rem]"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your prompt here"
                />
                <button
                  className="text-black text-center -ml-16"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </span>
              <p className="text-center mx-auto mt-2">
                Farmo is in development and is just an interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
