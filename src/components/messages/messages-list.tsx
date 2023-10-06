"use client";
import React, { useEffect, useRef, useState } from "react";
import Icons from "@/components/ui/icons";
import MessageText from "./message-text";
import { useMessage } from "@/providers/message-provider";

interface MessagesListProps {
  channelId: string;
}

const MessagesList = ({ channelId }: MessagesListProps) => {
  const { fetching, messages } = useMessage();
  const messageContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!messageContainer.current) return;
    messageContainer.current.scrollTop = 0;
  }, [messages, channelId]);

 

  if (fetching.messages) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-1 items-center">
          <Icons.spinner className="h-5 w-5 text-gray-500" />
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="overflow-y-scroll no-scrollbar flex flex-col-reverse gap-2 pt-4"
      ref={messageContainer}
    >
      {messages?.map(({ message, id }) => (
        <div key={id} className="px-3">
          <MessageText text={message} isMe={Math.random() > 0.5} />
        </div>
      ))}
    </div>
  );
};

export default React.memo(MessagesList);
