"use client";

import { createContext, useContext } from "react";
import { IUserInfo } from "@/interface/user";

interface IAuthContextValue {
  userInfo: IUserInfo;
}

const AuthContext = createContext<IAuthContextValue>({
  userInfo: {
    name: "",
    email: "",
    age: 0,
  },
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default function AuthProvider({
  children,
  userInfo,
}: {
  children: React.ReactNode;
  userInfo: IUserInfo;
}) {
  return (
    <AuthContext.Provider value={{ userInfo }}>{children}</AuthContext.Provider>
  );
}
