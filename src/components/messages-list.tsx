"use client";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

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

  return (
    <div className="overflow-y-scroll no-scrollbar flex flex-col gap-2 py-4">
      {fetching ? (
        mockMessages.map((_, idx) => (
          <div key={idx} className="px-3 flex gap-1 items-center">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className={`h-6 w-40 rounded-lg`} />
          </div>
        ))
      ) : messages?.length ? (
        messages.map(({ message, id }) => (
          <div key={id} className="px-3">
            {message}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default MessagesList;
