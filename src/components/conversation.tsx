import React from "react";
import Avatar from "./ui/avatar";
import TimeFormat from "./time-format";

const Conversation = () => {
  return (
    <div className="px-3 py-[6px] hover:bg-[#F5F5FA] cursor-pointer">
      <div className="flex">
        <Avatar
          src="https://avatars.githubusercontent.com/u/56917374?v=4"
          size={56}
          name={"Minh Quang"}
        />
        <div className="px-2 flex flex-col">
          <div className="flex gap-2">
            <h3 className="font-medium line-clamp-1">Tran Minh Quang</h3>
          </div>
          <p className="text-[12px] text-gray-500 line-clamp-2">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <TimeFormat time={1696571565000} />
      </div>
    </div>
  );
};

export default React.memo(Conversation);
