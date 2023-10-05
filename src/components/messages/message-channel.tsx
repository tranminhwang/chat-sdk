"use client";

import React, { Fragment, useEffect, useState } from "react";
import { isEmpty } from "lodash";

import Avatar from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import MessagesList from "@/components/messages/messages-list";

interface MessagesChannelProps {
  channel: any;
}

const MessagesChannel = ({ channel }: MessagesChannelProps) => {
  const [fetching, setFetching] = useState(false);
  const [conversationInfo, setConversationInfo] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        setFetching(true);
        const { data } = await fetch(
          `https://reqres.in/api/users/${channel}`
        ).then((res) => res.json());

        setConversationInfo({
          name: data.first_name + " " + data.last_name,
          avatar: data.avatar,
        });
      } finally {
        setFetching(false);
      }
    })();
  }, [channel]);

  return (
    <div className="min-w-[380px] w-full border-l border-gray-100 flex flex-col">
      <div className="border-b border-gray-100 px-3 py-2 sticky top-0 left-0">
        <div className="flex items-center gap-2">
          {fetching ? (
            <Fragment>
              <Skeleton className="h-9 w-9 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </Fragment>
          ) : isEmpty(conversationInfo) ? (
            <Fragment>
              <Skeleton className="h-9 w-9 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </Fragment>
          ) : (
            <Fragment>
              <Avatar
                size={36}
                name={conversationInfo.name}
                priority={true}
                src={conversationInfo.avatar}
              />
              <h4 className="text-[15px] font-semibold cursor-pointer">
                {conversationInfo.name}
              </h4>
            </Fragment>
          )}
        </div>
      </div>
      <MessagesList channelId={channel.toString()} />
      <div className="border-t border-gray-100">
        <div className="h-14 w-full p-3"></div>
      </div>
    </div>
  );
};

export default MessagesChannel;
