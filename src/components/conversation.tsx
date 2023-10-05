import React from "react";
import Link from "next/link";
import Avatar from "./ui/avatar";
import { changeIframeLayout } from "@/utils/iframe";

const Conversation = ({ id }: { id: string }) => {
  return (
    <Link href={`/channel/${id}`}>
      <div
        className="px-3 py-[6px] hover:bg-[#F5F5FA] cursor-pointer"
        onClick={changeIframeLayout.openConversation}
      >
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
    </Link>
  );
};

export default Conversation;
