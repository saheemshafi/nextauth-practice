"use client"
import { signOut } from 'next-auth/react';
import { FC } from 'react'

interface SignOutBtnProps {
  
}

const SignOutBtn: FC<SignOutBtnProps> = ({}) => {
  return (<button onClick={() => signOut()}>Sign Out</button>);
}

export default SignOutBtn