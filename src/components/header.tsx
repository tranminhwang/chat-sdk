"use client";

import React, { useState } from "react";
import Avatar from "./ui/avatar";
import { useAuth } from "@/providers/auth-provider";
import Icons from "./ui/icons";

import { changeIframeLayout } from "@/utils/iframe";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const { userInfo } = useAuth();
  const router = useRouter();
  const pathName = usePathname();
  const [isExpand, setIsExpand] = useState(false);

  return (
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
      <div className="flex gap-2 items-center">
        {pathName.includes("/channel") && (
          <div
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              !isExpand
                ? changeIframeLayout.expandFullScreen()
                : changeIframeLayout.collapseFullScreen();
              setIsExpand(!isExpand);
            }}
          >
            {!isExpand ? <Icons.expand /> : <Icons.collapse />}
          </div>
        )}
        <div
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            changeIframeLayout.closeChat();
            setIsExpand(false);
            router.push("/");
          }}
        >
          {<Icons.close />}
        </div>
      </div>
    </header>
  );
};

export default Header;
