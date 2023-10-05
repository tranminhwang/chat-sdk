"use client";

import Conversation from "@/components/conversation";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col gap-2 overflow-y-scroll no-scrollbar">
        {Array.from({ length: 50 }).map((_, idx) => (
          <Conversation key={idx} />
        ))}
      </div>
    </main>
  );
}
