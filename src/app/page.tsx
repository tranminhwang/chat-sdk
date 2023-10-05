"use client";

import { useAuth } from "@/providers/auth-provider";
import { changeIframeLayout } from "@/utils/iframe";
import Icons from "@/components/ui/icons";
import Avatar from "@/components/ui/avatar";

const { closeChat, openConversation } = changeIframeLayout;

export default function Home() {
  const { userInfo } = useAuth();

  return (
    <main className="h-full flex flex-col">
      <header className="flex justify-between items-center p-3 bg-white border-b border-gray-100 sticky top-0 left-0 z-50">
        <div className="flex gap-2 items-center">
          <Avatar
            src="https://avatars.githubusercontent.com/u/56917374?v=4"
            size={40}
            priority={true}
            name={userInfo.name}
          />
          <h4 className="text-md font-semibold cursor-pointer">
            {userInfo.name}
          </h4>
        </div>
        <div className="w-6 h-6 cursor-pointer" onClick={closeChat}>
          {<Icons.close />}
        </div>
      </header>
      <div className="flex-1 flex flex-col gap-2 overflow-y-scroll">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="px-3 py-[6px] hover:bg-[#F5F5FA] cursor-pointer"
            onClick={openConversation}
          >
            <Avatar
              src="https://avatars.githubusercontent.com/u/56917374?v=4"
              size={56}
              name={userInfo.name}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
