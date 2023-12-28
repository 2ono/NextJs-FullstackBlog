import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-3">
      This website is designed by{" "}
      <a className="font-bold text-blue-700" href="https://github.com/2ono/NextJs-FullstackBlog" target="_blank">Henry</a>{" "}
      @ 2023
    </footer>
  );
};

export default Footer;
