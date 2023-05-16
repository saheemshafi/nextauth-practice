"use client";
import React, { FC } from "react";
import { SessionProvider, useSession } from "next-auth/react";

interface NextAuthProviderProps {
  children: React.ReactNode;
}

const NextAuthProvider: FC<NextAuthProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
