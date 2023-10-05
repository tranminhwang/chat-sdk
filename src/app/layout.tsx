"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import LoadingBeforeFetchCredentails from "@/components/loading-before-fetch";
import UnauthorizedPage from "@/components/unauthorized-page";
import { getUserInfo } from "@/services/user";
import AuthProvider from "@/providers/auth-provider";
import { IUserInfo } from "@/interface/user";
import LayoutWrapper from "@/components/layout-wrapper";

const inter = Inter({ subsets: ["latin"] });

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
        window.parent.postMessage(
          {
            type: "authentication",
            message: "unauthorized",
            payload: null,
          },
          "*"
        );
      }
    } catch (err) {
      setIsAuthorized(false);
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
        className={inter.className + " h-screen w-screen !bg-white"}
        suppressHydrationWarning={true}
      >
        {fetching && !isAuthorized && <LoadingBeforeFetchCredentails />}
        {!fetching && !isAuthorized && <UnauthorizedPage />}
        {!fetching && isAuthorized && (
          <AuthProvider userInfo={userInfo as IUserInfo}>
            <LayoutWrapper>{children}</LayoutWrapper>
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
