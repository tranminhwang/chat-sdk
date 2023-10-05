"use client";

import { ReactNode } from "react";
import Header from "./header";
import Conversation from "./conversation";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex-1 w-full flex overflow-y-scroll no-scrollbar">
        <div
          className="flex flex-col gap-2 overflow-y-scroll no-scrollbar w-max"
          style={{
            minWidth: pathName.includes("/channel") ? "340px" : "375px",
            transition: "min-width 0.2s ease-in-out",
          }}
        >
          {Array.from({ length: 50 }).map((_, idx) => (
            <Conversation key={idx} id={idx.toString()} />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
