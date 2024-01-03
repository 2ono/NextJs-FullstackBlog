"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { status, data: session } = useSession();
  const [isPopulVisible, setIsPopupVisable] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlerClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupVisable(false);
      }
    };

    document.addEventListener("click", handlerClickOutside);
    if (!isPopulVisible) {
      document.removeEventListener("click", handlerClickOutside);
    }
    return () => {
      document.removeEventListener('click', handlerClickOutside)
    }
  }, [isPopulVisible]);

  return (
    <div className="flex justify-between pb-4 border-b mb-4 relative">
      <div>
        <Link href={"/"}>
          <h1 className="text-dark text-4xl font-bold tracking-tighter">
            Tech News
          </h1>
          <p className="text-sm">
            Expoloring Tomorriw&apos;s Innovations, <br />
            One Bytes at a Time
          </p>
        </Link>
      </div>
      {status === "authenticated" ? (
        <>
          <div
            ref={popupRef}
            className={`absolute z-30 right-0 top-20 bg-white p-6 shadow-lg
           rounded-md flex-col gap-2 text-right min-w-[160px] ${
             isPopulVisible ? "flex" : "hidden"
           }`}
          >
            <div className="font-bold">{session?.user?.name}</div>
            <div>{session?.user?.email}</div>
            <Link
              onClick={() => setIsPopupVisable(false)}
              className="hover:underline"
              href={"/dashboard"}
            >
              DashBoard
            </Link>
            <Link
              onClick={() => setIsPopupVisable(false)}
              className="hover:underline"
              href={"/create-post"}
            >
              Create Post
            </Link>
            <button className="btn" onClick={() => signOut()}>
              Sign out
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              className=" hidden md:flex gap-2 items-center mr-6"
              href={"/create-post"}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>Create new</span>
            </Link>
            <Image
              onClick={() => setIsPopupVisable((prev) => !prev)}
              src={session?.user?.image || ""}
              width={36}
              height={36}
              alt="Profile Image"
              className="rounded-full cursor-pointer"
            />
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <Link className="btn" href={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
