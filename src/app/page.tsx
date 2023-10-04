"use client";

import React, { useEffect } from "react";
import { changeIframeLayout } from "@/utils/iframe";
export default function Home() {
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [credentials, setCredentials] = React.useState<any>();

  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        if (event.origin !== "http://localhost:3000") return;
        setCredentials(event.data);
      },
      false
    );
  }, []);

  return (
    <main className="flex flex-col items-center bg-white p-4">
      {/* <div className="flex gap-4">
        <div
          className="text-white bg-black font-bold cursor-pointer px-4 py-2 rounded-xl"
          onClick={changeIframeLayout.closeChat}
        >
          Close
        </div>
        <div
          className="text-white bg-black font-bold cursor-pointer px-4 py-2 rounded-xl"
          onClick={changeIframeLayout.openConversation}
        >
          Conversation
        </div>
        <div
          className="text-white bg-black font-bold cursor-pointer px-4 py-2 rounded-xl"
          onClick={() => {
            !isFullScreen
              ? changeIframeLayout.expandFullScreen()
              : changeIframeLayout.collapseFullScreen();
            setIsFullScreen(!isFullScreen);
          }}
        >
          Expand
        </div>
      </div>
      <div className="mt-4 text-black">
        <h4>{credentials && JSON.stringify(credentials, null, 2)}</h4>
      </div> */}
    </main>
  );
}
