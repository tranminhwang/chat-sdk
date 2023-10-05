"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { getUserInfo } from "@/services/user";
import AuthProvider from "@/providers/auth-provider";
import { IUserInfo } from "@/interface/user";

const LoadingBeforeFetchCredentails = dynamic(
  () => import("@/components/loading-before-fetch"),
  { ssr: true }
);
const UnauthorizedPage = dynamic(
  () => import("@/components/unauthorized-page"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

const messageUnauthorized = {
  type: "authentication",
  message: "unauthorized",
  payload: null,
};

interface Credentials {
  bizId: string;
  userId: string;
  accessToken: string;
  refreshToken: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fetching, setFetching] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  const handleMessages = useCallback(async (event: any) => {
    try {
      if (event.origin === process.env.CLIENT_HOST) {
        const { accessToken, refreshToken } = event.data as Credentials;
        const user = await getUserInfo(accessToken, refreshToken);
        setUserInfo(user);
        setIsAuthorized(true);
        window.removeEventListener("message", handleMessages);
      } else {
        window.parent.postMessage(messageUnauthorized, "*");
      }
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessages);
    return () => {
      window.removeEventListener("message", handleMessages);
    };
  }, [handleMessages]);

  return (
    <html lang="en">
      <body
        className={
          inter.className + " h-screen w-screen !bg-white no-scrollbar"
        }
        suppressHydrationWarning={true}
      >
        {fetching && !isAuthorized && <LoadingBeforeFetchCredentails />}
        {!fetching && !isAuthorized && <UnauthorizedPage />}
        {!fetching && isAuthorized && (
          <AuthProvider userInfo={userInfo as IUserInfo}>
            {children}
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
