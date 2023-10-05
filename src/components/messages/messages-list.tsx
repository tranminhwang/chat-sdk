"use client";
import React, { useEffect, useRef, useState } from "react";
import Icons from "@/components/ui/icons";
import MessageText from "./message-text";

interface MessagesListProps {
  channelId: string;
}

const mockMessages = Array.from({ length: 10 });

const mockGetMessages = async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockMessages.map((_, idx) => ({
          id: idx,
          message: `message - ${idx}`,
        })),
      });
    }, 150);
  });
};

const MessagesList = ({ channelId }: MessagesListProps) => {
  const [fetching, setFetching] = useState(false);
  const [messages, setMessages] = useState<any[]>();
  const messageContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      try {
        setFetching(true);
        const res = await mockGetMessages();
        setMessages(res.data);
      } finally {
        setFetching(false);
      }
    })();
  }, [channelId]);

  useEffect(() => {
    if (!messageContainer.current) return;
    messageContainer.current.scrollTop = 0;
  }, [messages, channelId]);

  if (fetching) {
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
      className="overflow-y-scroll no-scrollbar flex flex-col-reverse gap-2 py-4"
      ref={messageContainer}
    >
      {messages?.map(({ message, id }) => (
        <div key={id} className="px-3">
          <MessageText />
        </div>
      ))}
    </div>
  );
};

export default React.memo(MessagesList);
