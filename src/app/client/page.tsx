"use client";
import { useSession } from "next-auth/react";
import { FC } from "react";

interface pageProps {}

const Client: FC<pageProps> = ({}) => {
  const { data } = useSession();
  return <pre>{JSON.stringify(data)}</pre>;
};

export default Client;
