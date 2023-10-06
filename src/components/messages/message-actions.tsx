import React from "react";
import Icons from "@/components/ui/icons";
import MessageInput from "./message-input";

 const playSound = () => {
   const audio = new Audio("/static/alarm-kitchen.mp3");
   audio.play();
 };


const MessagesActions = () => {
  return (
    <div className="min-h-14 w-full p-3 flex gap-2 items-center">
      <div className="h-6 w-6 cursor-pointer" onClick={playSound}>
        {<Icons.plusCircle className="text-[#0b74e5]" />}
      </div>
      <div className="flex-1">
        <MessageInput />
      </div>
    </div>
  );
};

export default MessagesActions;
