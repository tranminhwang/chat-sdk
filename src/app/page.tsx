"use client";

import Image from "next/image";
import { useAuth } from "@/providers/auth-provider";
import { changeIframeLayout } from "@/utils/iframe";
import Icons from "@/components/ui/icons";

export default function Home() {
  const { userInfo } = useAuth();

  return (
    <main className="flex flex-col bg-white">
      <header className="flex justify-between items-center px-4 py-3 border-b">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full relative overflow-hidden">
            <Image
              className="absolute w-full h-full object-cover"
              src="https://avatars.githubusercontent.com/u/56917374?v=4"
              alt={userInfo.name}
              fill
            />
          </div>
          <h4 className="text-md font-semibold">{userInfo.name}</h4>
        </div>
        <div
          className="w-6 h-6 cursor-pointer"
          onClick={changeIframeLayout.closeChat}
        >
          {<Icons.close />}
        </div>
      </header>
    </main>
  );
}
