import React from "react";
import Avatar from "@/components/ui/avatar";

const MessageText = () => {
  const isMe = Math.random() > 0.5;

  return (
    <div>
      {isMe ? (
        <div className="flex justify-end pr-6">
          <div>
            <div className="max-w-[265px] px-3 py-2 rounded-lg bg-[#0b74e5]">
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                aut facere sint deserunt ratione beatae molestias nisi neque
                exercitationem iste maiores, optio laborum corrupti rerum libero
                est! Asperiores, qui. Mollitia.
              </p>
            </div>
            <p className="text-[10px] text-right text-gray-500 mt-1">16:11</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Avatar
            size={24}
            src="https://avatars.githubusercontent.com/u/56917374?v=4"
            name="Minh Quang"
          />
          <div>
            <div className="max-w-[265px] px-3 py-2 rounded-lg bg-[#ebebf0]">
              <p className="text-sm text-[#38383d]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                aut facere sint deserunt ratione beatae molestias nisi neque
                exercitationem iste maiores, optio laborum corrupti rerum libero
                est! Asperiores, qui. Mollitia.
              </p>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">16:11</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageText;
