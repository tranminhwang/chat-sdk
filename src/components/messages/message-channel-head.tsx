import React, { Fragment } from "react";
import { isEmpty } from "lodash";
import Avatar from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

interface MessageChannelHeadProps {
  fetching: boolean;
  conversationInfo: any;
}

const MessageChannelHead = ({
  fetching,
  conversationInfo,
}: MessageChannelHeadProps) => {
  return (
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
  );
};

export default React.memo(MessageChannelHead);
