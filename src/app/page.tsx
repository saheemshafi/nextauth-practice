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
      <pre className="whitespace-pre-wrap break-words bg-gray-800 p-5">
        {JSON.stringify(session?.user)}
      </pre>
      <Link className="font-semibold text-sky-500 hover:text-sky-400 visited:text-blue-400 underline decoration-wavy inline-block m-3" href={"/client"}>Go to client component</Link>
      <main className="p-4 sm:p-24 grid sm:grid-cols-2 auto-rows-auto gap-3">
        <span className="hover:ring-4 hover:ring-rose-500/40 py-3 px-4 font-medium rounded-md bg-rose-500 text-white flex space-x-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
          </svg>{" "}
          <SignInBtn provider="google" />
        </span>
        <span className="hover:ring-4 hover:ring-purple-500/40 py-3 px-4 font-medium rounded-md bg-purple-500 text-white flex space-x-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
          <SignInBtn provider="github" />
        </span>
        <span className="hover:ring-4 hover:ring-sky-500/40 py-3 px-4 font-medium rounded-md bg-sky-500 text-white flex space-x-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
          </svg>
          <SignInBtn provider="twitter" />
        </span>
        <span className="hover:ring-4 hover:blue-rose-500/40 py-3 px-4 font-medium rounded-md bg-blue-500 text-white flex space-x-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
          </svg>
          <SignInBtn provider="facebook" />
        </span>
        <span className="hover:ring-4 hover:ring-green-500/40 py-3 px-4 font-medium rounded-md bg-green-500 text-white flex space-x-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z"></path>
          </svg>
          <SignInBtn provider="spotify" />
        </span>
        <span className="hover:ring-4 hover:ring-white-500/40 py-3 px-4 font-medium rounded-md bg-gray-800 text-white flex space-x-2 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="m2 12 5 4v-3h9v-2H7V8z"></path>
            <path d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path>
          </svg>
          <SignOutBtn />
        </span>
      </main>
    </>
  );
}
