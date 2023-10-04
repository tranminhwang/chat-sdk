import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat SDK",
  description: "Chat SDK is a free open-source instant messaging framework.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " h-screen w-screen bg-white"}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
