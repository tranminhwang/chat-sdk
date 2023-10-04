"use client";

export default function Home() {
  const onCloseChatFrame = () => {
    window.parent.postMessage("closeChat", "*");
  };
  const onOpenConversation = () => {
    window.parent.postMessage("openConversation", "*");
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white p-4">
      <div className="flex gap-4">
        <div
          className="text-white bg-black font-bold cursor-pointer px-4 py-2 rounded-xl"
          onClick={onCloseChatFrame}
        >
          Close
        </div>
        <div
          className="text-white bg-black font-bold cursor-pointer px-4 py-2 rounded-xl"
          onClick={onOpenConversation}
        >
          Open Conversation
        </div>
      </div>
    </main>
  );
}
