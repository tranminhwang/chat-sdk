"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { isEmpty } from "lodash";
import { changeIframeLayout } from "@/utils/iframe";
import Header from "@/components/header";
const MessagesChannel = dynamic(() => import("@/components/message-channel"));
const Conversation = dynamic(() => import("@/components/conversation"));

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [activeChannel, setActiveChannel] = useState<string>();
  const conversations = Array.from({ length: 50 });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const onChannelClick = useCallback(
    (channelId: string) => {
      router.push(pathname + "?" + createQueryString("channelId", channelId));
      changeIframeLayout.openConversation();
      setActiveChannel(channelId);
    },
    [pathname, router, createQueryString]
  );

  useEffect(() => {
    if (!searchParams.get("channelId")) {
      setActiveChannel(undefined);
    }
  }, [searchParams]);

  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex-1 flex w-full overflow-y-scroll no-scrollbar">
        <div
          className="flex flex-col gap-2 overflow-y-scroll no-scrollbar w-max"
          style={{
            minWidth: activeChannel ? "340px" : "375px",
            transition: "min-width 0.15s ease-in-out",
          }}
        >
          {conversations.map((_, idx) => {
            const channelId = (idx + 1).toString();
            return (
              <div
                key={idx}
                className={`w-full ${
                  activeChannel === channelId && "bg-[#CEE5FD]"
                }`}
                onClick={() => onChannelClick(channelId)}
              >
                <Conversation />
              </div>
            );
          })}
        </div>
        {!isEmpty(activeChannel) && <MessagesChannel channel={activeChannel} />}
      </div>
    </div>
  );
}
