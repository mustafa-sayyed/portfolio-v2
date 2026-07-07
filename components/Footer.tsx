"use client";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="my-8 flex items-center justify-between">
      <p className="text-center text-sm font-light">Made with Curiosity by me.</p>
      <a
        href="https://github.com/mustafa-sayyed"
        target="_blank"
      >
        <FaGithub className="dark:hover:text-white"/>
      </a>
    </div>
  );
}

export default Footer;
