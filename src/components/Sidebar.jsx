import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  RiSettings3Line,
  RiHome5Line,
  RiTeamLine,
  RiFileCopy2Line,
  RiMenu4Line,
} from "react-icons/ri";

import Logo from "./Logo";
import { Button } from "./Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const sidebarHeaderItems = [
  { link: "overview", icon: <RiHome5Line />, text: "overview" },
  { link: "invoices", icon: <RiFileCopy2Line />, text: "invoices" },
  { link: "users", icon: <RiTeamLine />, text: "users" },
];

const sidebarFooterItems = [
  { link: "settings", icon: <RiSettings3Line />, text: "settings" },
];

const ButtonItem = ({ link, icon, text }) => {
  return (
    <TooltipProvider delayDuration="200">
      <Tooltip>
        <TooltipTrigger>
          <NavLink
            to={link}
            className={({ isActive }) =>
              isActive ? "flex items-center text-sky-500" : undefined
            }
          >
            <Button variant="ghost" className=" uppercase hover:bg-sky-100">
              <span className="text-[1.5rem]">{icon}</span>
            </Button>
          </NavLink>
        </TooltipTrigger>

        <TooltipContent
          className="p-2 uppercase bg-sky-700 font-semibold text-xs"
          side="right"
          sideOffset="1"
        >
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function Sidebar() {
  return (
    <aside className=" h-[calc(100%-3.5rem)] z-10 fixed bottom-0 flex flex-col py-4 px-2 pt-20 justify-between bg-white shadow-xl text-gray-600 ">
      <header className="flex flex-col gap-4 items-center">
        {sidebarHeaderItems.map(({ link, icon, text }, i) => {
          return <ButtonItem key={i} link={link} icon={icon} text={text} />;
        })}
      </header>
      {sidebarFooterItems.map(({ link, icon, text }, i) => {
        return <ButtonItem key={i} link={link} icon={icon} text={text} />;
      })}
    </aside>
  );
}
