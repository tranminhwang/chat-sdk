import React from "react";
import Avatar from "./ui/avatar";

const Conversation = () => {
  return (
    <div className="px-3 py-[6px] hover:bg-[#F5F5FA] cursor-pointer">
      <div className="flex">
        <Avatar
          src="https://avatars.githubusercontent.com/u/56917374?v=4"
          size={56}
          name={"Minh Quang"}
        />
        <div className="mx-2 flex flex-col justify-center">
          <div className="flex gap-2">
            <h3 className="font-medium line-clamp-1">Tran Minh Quang</h3>
          </div>
          <p className="text-[12px] text-gray-500 line-clamp-1">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <p className="text-[12px] text-gray-500 mr-0 ml-auto">27/09</p>
      </div>
    </div>
  );
};

export default React.memo(Conversation);
