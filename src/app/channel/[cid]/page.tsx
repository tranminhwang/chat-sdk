import Avatar from "@/components/ui/avatar";
import React from "react";

interface Props {
  params: {
    cid: string;
  };
}

const ChannelPage = ({ params }: Props) => {
  return (
    <div className="min-w-[380px] w-full border-l border-gray-100 flex flex-col">
      <div className="border-b border-gray-100 px-3 py-2 sticky top-0 left-0">
        <div className="flex items-center gap-2">
          <Avatar
            size={36}
            name="A Van Tran"
            priority={true}
            src="https://avatars.githubusercontent.com/u/56917374?v=4"
          />
          <h4 className="text-[15px] font-semibold cursor-pointer">
            Vincent Quang Gogh
          </h4>
        </div>
      </div>
      <div className="overflow-y-scroll no-scrollbar flex flex-col gap-2 py-4">
        {Array.from({ length: 50 }).map((_, idx) => (
          <div key={idx} className="px-3">
            message - {idx}
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100">
        <div className="h-14 w-full p-3"></div>
      </div>
    </div>
  );
};

export default ChannelPage;
