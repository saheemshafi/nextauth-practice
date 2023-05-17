import Image from "next/image";
import SignOutBtn from "@/components/SignOutBtn";
import SignInBtn from "@/components/SignInBtn";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <pre>{JSON.stringify(session)}</pre>
      <Link href={"/client"}>Go to client component</Link>
      <main className="p-24">
        <span className="py-2 px-4 font-medium rounded-md bg-gray-800 text-white inline-block mx-2">
          <SignOutBtn />
        </span>
        <span className="py-2 px-4 font-medium rounded-md bg-rose-500 text-white inline-block mx-2">
          <SignInBtn provider="google"/>
        </span>
        <span className="py-2 px-4 font-medium rounded-md bg-purple-500 text-white inline-block mx-2">
          <SignInBtn provider="github"/>
        </span>
        <span className="py-2 px-4 font-medium rounded-md bg-sky-500 text-white inline-block mx-2">
          <SignInBtn provider="twitter"/>
        </span>
        <span className="py-2 px-4 font-medium rounded-md bg-blue-500 text-white inline-block mx-2">
          <SignInBtn provider="facebook"/>
        </span>
      </main>
    </>
  );
}
