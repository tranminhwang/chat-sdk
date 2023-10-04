"use client";

import { useAuth } from "@/providers/auth-provider";

export default function ChatPage() {
  const { userInfo } = useAuth();

  return (
    <main className="flex flex-col items-center bg-white">
      <h1 className="text-2xl text-black">{userInfo.name}</h1>
    </main>
  );
}
