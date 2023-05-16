"use client";
import { signIn } from "next-auth/react";
import { FC } from "react";

interface SignInBtnProps {
  provider: string;
}

const SignInBtn: FC<SignInBtnProps> = ({ provider }) => {
  return (
    <button onClick={() => signIn(provider)}>
      Sign In With {provider.toUpperCase()}
    </button>
  );
};

export default SignInBtn;
