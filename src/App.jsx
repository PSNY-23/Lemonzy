import React, { useState } from "react";
import img from "./assets/forest.jpg";
const tabsContent = [
  {
    title: "Home",
    description:
      "Welcome to the Home tab, where you can find the latest news and updates about our platform. Whether you're looking for the most recent announcements, new features, or upcoming events, this is your go-to place. Stay informed with the freshest content, personalized recommendations, and key highlights curated just for you. Our goal is to keep you connected with everything happening on the platform, ensuring that you're always up-to-date and never miss out on important information. Dive in to explore and discover what's new today!",
  },
  {
    title: "Profile",
    description:
      "This is your Profile tab, where you can view and edit all your personal information. Here, you have full control over your account details, including your username, email, password, and more. Personalize your profile with a picture, update your bio, and manage your privacy settings to ensure that your account reflects who you are. Whether you're updating your contact information, setting preferences, or simply checking your profile status, this tab is designed to give you the tools you need to manage your online identity effortlessly.",
  },
  {
    title: "Messages",
    description:
      "Check out your Messages tab, your hub for staying connected with friends, family, and colleagues. Whether you're catching up on old conversations, replying to recent messages, or starting new chats, this is the place where all your communication happens. Keep track of your inbox, sent messages, and drafts with ease. Our messaging system is designed to be fast, secure, and user-friendly, ensuring that your conversations are private and easy to manage. Never miss an important message and stay in touch with the people who matter most.",
  },
  {
    title: "Settings",
    description:
      "Adjust your preferences in the Settings tab, where you can customize your experience on our platform. From managing notifications and privacy settings to changing your account",
  },
];

function App() {
  let [content, setContent] = useState("No tab selected");
  let [currTab, setCurrTab] = useState(null);
  console.log(currTab);
  console.log(typeof currTab);
  function handleClick(selectedTab) {
    setCurrTab(selectedTab);
    let index = Number(selectedTab);
    let content = tabsContent[index].description;
    setContent(content);
  }
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-1/2 ">
        <h1 className="text-center text-6xl font-bold text-gray-200 mb-5 bg-transparent backdrop-blur-md py-3 rounded-sm border">
          🍋 Lemonzy Navigation{" "}
        </h1>
        <div className=" Tabs flex justify-between items-center px-3 py-2 bg-transparent backdrop-blur-sm border  rounded-t-3xl">
          <button
            className={`${
              currTab === "0" ? "bg-blue-600" : "bg-transparent"
            } backdrop-blur-sm border transform transition-all hover:scale-105 duration-300 rounded-full px-6 text-2xl font-bold text-white py-2`}
            onClick={() => {
              handleClick("0");
            }}
          >
            Tab 1
          </button>
          <button
            className={`${
              currTab === "1" ? "bg-blue-500" : "bg-transparent"
            }  backdrop-blur-sm border transition-all hover:scale-105 duration-300 rounded-full px-6 text-2xl font-bold text-white py-2`}
            onClick={() => {
              handleClick("1");
            }}
          >
            Tab 2
          </button>
          <button
            className={`${
              currTab === "2" ? "bg-blue-500" : "bg-transparent"
            } backdrop-blur-sm border transform transition-all hover:scale-105 duration-300 rounded-full px-6 text-2xl font-bold text-white py-2`}
            onClick={() => {
              handleClick("2");
            }}
          >
            Tab 3
          </button>
          <button
            className={`${
              currTab === "3" ? "bg-blue-500" : "bg-transparent"
            } backdrop-blur-sm border transform transition-all hover:scale-105 duration-300 rounded-full px-6 text-2xl font-bold text-white py-2`}
            onClick={() => {
              handleClick("3");
            }}
          >
            Tab 4
          </button>
        </div>
        <div className="transition-all durating-300  bg-transparent border backdrop-blur-lg w-full rounded-b-lg mt-1 p-5 text-xl font-bold text-gray-300 smooth-text">
          <p className="text-center">{content}</p>
        </div>
      </div>
      <div className="fixed absolute bottom-2 text-center text-white">
        <p>@Pankaj</p>
      </div>
    </div>
  );
}

export default App;
