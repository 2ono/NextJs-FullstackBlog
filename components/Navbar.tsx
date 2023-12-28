import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between pb-4 border-b mb-4">
      <div>
        <Link href={"/"}>
          <h1 className="text-dark text-4xl font-bold tracking-tighter">Tech News</h1>
          <p className="text-sm">
            Expoloring Tomorriw's Innovations, <br />
            One Bytes at a Time
          </p>
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="btn" href={"/sign-in"}>Sign In</Link>
      </div>
    </div>
  );
};

export default Navbar;
