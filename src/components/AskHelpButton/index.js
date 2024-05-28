"use client";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import clsx from "clsx";
import { useState } from "react";

function ChatBox() {
  return (
    <div className="fixed top-[10px] right-[10px] h-4/5 w-1/12 bg-green-300 z-10">
      <h2>Let&apos;s chat!</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit" className="bg-blue-700 w-full text-white">
          Start Chat
        </button>
      </form>
    </div>
  );
}
const AskHelpButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      {isChatOpen && <ChatBox />}
      <button
        className="fixed bottom-[10px] right-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setIsChatOpen(!isChatOpen);
        }}
      >
        <IoChatboxEllipsesOutline />
      </button>
    </>
  );
};
export default AskHelpButton;
