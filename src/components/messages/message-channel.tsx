"use client";

import React from "react";
import MessagesList from "@/components/messages/messages-list";
import MessagesActions from "./message-actions";
import MessageChannelHead from "./message-channel-head";
import { useMessage } from "@/providers/message-provider";
import withChannelId, { MessagesChannelProps } from "@/hocs/with-channel-id";

const MessagesChannel = ({ channel }: MessagesChannelProps) => {
  const { fetching, conversationInfo } = useMessage();

  return (
    <div className="min-w-[380px] w-full border-l border-gray-100 flex flex-col">
      <div className="border-b border-gray-100 px-3 py-2 sticky top-0 left-0">
        <MessageChannelHead
          fetching={fetching.channelInfo}
          conversationInfo={conversationInfo}
        />
      </div>
      <MessagesList channelId={channel} />
      <MessagesActions />
    </div>
  );
};

export default withChannelId(MessagesChannel);
