"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";


const SignInBtns = () => {
  return (
    <>
      <h1 className="text-center mt-8">Sign In</h1>
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button onClick={() => signIn('github')}
          className="flex items-center border p-5 rounded-full gap-4
        hover:bg-slate-100/25 transition"
        >
          <span>
            <Image
              src={"/githublogo.png"}
              width={30}
              height={30}
              alt="GithubLogo"
            />
          </span>
          Sigin In with Github
        </button>

        <button
        onClick={() => signIn('google')}
          className="flex items-center border p-5 rounded-full gap-4
        hover:bg-slate-100/25 transition"
        >
          <span>
            <Image
              src={"/googlelogo.webp"}
              width={30}
              height={30}
              alt="GithubLogo"
            />
          </span>
          Sigin In with Google
        </button>
      </div>
    </>
  );
};

export default SignInBtns;
