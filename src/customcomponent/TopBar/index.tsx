import { Contact, Heart, Notification, SignIn } from "@/svg";
import Link from "next/link";
import React from "react";
import { Nav } from "../Nav";
import { navConfigs } from "@/constant/navConfigs";

const TopBar = () => {
  const otherLinks = [
    { comp: <Contact />, text: "Call" },
    { comp: <Heart />, text: "Whislist" },
    { comp: <Notification />, text: "Notification" },
    { comp: <SignIn />, text: "Sign In" },
  ];

  return (
    <header className="bg-primary-color pt-[12px]">
      <div className="wrapper flex justify-between items-center pb-[8px]">
        <h1 className="text-white uppercase font-bold">
          <Link href="/">Travel App</Link>
        </h1>

        <div className="w-[50%] relative">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[50%] left-[10px] translate-y-[-50%]"
          >
            <g id="Basics / search">
              <path
                id="Vector"
                d="M14.05 14.05L10.45 10.45M6.84995 12.25C3.86761 12.25 1.44995 9.83229 1.44995 6.84995C1.44995 3.86761 3.86761 1.44995 6.84995 1.44995C9.83229 1.44995 12.25 3.86761 12.25 6.84995C12.25 9.83229 9.83229 12.25 6.84995 12.25Z"
                stroke="#999999"
              />
            </g>
          </svg>
          <input
            placeholder="Search"
            className="w-full focus:outline-none pr-[15px] pl-[32px] py-[10px] rounded-[999px] text-[13px] placeholder:text-[12px]"
          />
        </div>

        <ul className="flex gap-[20px]">
          {otherLinks.map((links, index) => (
            <li key={index}>
              <Link
                className="flex justify-center items-center flex-col"
                href="/"
              >
                <span className="inline-block h-[25px]">{links?.comp}</span>
                <span className="text-white text-[12px] font-semibold">
                  {links.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-nav-color">
        <div className="wrapper flex justify-center">
          <Nav navConfigs={navConfigs} />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
