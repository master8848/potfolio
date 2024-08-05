import { SOCIALS_LIST } from "./SocialLists";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-auto ">
      <div className="border-t border-gray-200 py-2 text-center md:flex md:justify-between">
        <p className="text-base mt-4">&copy;SauravSanjel</p>
        <ul className="flex space-x-3">
          {SOCIALS_LIST.map((current) => (
            <li
              key={"footer" + current.name}
              className="p-2 bg-accent text-accent-foreground rounded-full"
            >
              <a target="_blank" href={current.link}>
                {current.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
