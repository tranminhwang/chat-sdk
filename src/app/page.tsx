"use client";

export default function Home() {
  const onCloseChatFrame = () => {
    window.parent.postMessage("closeChat", "*");
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white p-4">
      <div
        className="text-white bg-black font-bold cursor-pointer px-4 py-2 rounded-xl"
        onClick={onCloseChatFrame}
      >
        Close
      </div>
    </main>
  );
}
