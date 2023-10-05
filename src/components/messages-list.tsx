"use client";
import React, { useEffect, useState } from "react";
import Icons from "./ui/icons";

interface MessagesListProps {
  channelId: string;
}

const mockMessages = Array.from({ length: 40 });

const mockGetMessages = async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockMessages.map((_, idx) => ({
          id: idx,
          message: `message - ${idx}`,
        })),
      });
    }, 300);
  });
};

const MessagesList = ({ channelId }: MessagesListProps) => {
  const [fetching, setFetching] = useState(false);
  const [messages, setMessages] = useState<any[]>();

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

  if (fetching) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-1 items-center">
          <Icons.spinner className="h-5 w-5 text-gray-600" />
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-y-scroll no-scrollbar flex flex-col gap-2 py-4">
      {messages?.map(({ message, id }) => (
        <div key={id} className="px-3">
          {message}
        </div>
      ))}
    </div>
  );
};

export default React.memo(MessagesList);
