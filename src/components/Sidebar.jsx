import { motion } from "framer-motion";
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
import { useState } from "react";

const sidebarHeaderItems = [
  { link: "overview", icon: <RiHome5Line />, text: "overview" },
  { link: "invoices", icon: <RiFileCopy2Line />, text: "invoices" },
  { link: "clients", icon: <RiTeamLine />, text: "clients" },
];

const sidebarFooterItems = [
  { link: "settings", icon: <RiSettings3Line />, text: "settings" },
];

const ButtonItem = ({ link, icon, text }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <TooltipProvider delayDuration="200">
        <Tooltip>
          <TooltipTrigger>
            <NavLink
              to={link}
              className={({ isActive }) =>
                ` flex items-center rounded-sm px-4 py-3 hover:bg-sky-100 ${
                  isActive ? "text-sky-500 " : null
                }  `
              }
            >
              <motion.span
                animate={isHoverd ? { scale: 0.8 } : { scale: 1 }}
                className="text-[1.5rem]"
              >
                {icon}
              </motion.span>
            </NavLink>
          </TooltipTrigger>

          <TooltipContent
            className="bg-sky-700 p-2 text-xs font-semibold uppercase"
            side="right"
            sideOffset="1"
          >
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

export default function Sidebar() {
  return (
    <aside className=" fixed bottom-0 z-10 flex h-[calc(100%-3.5rem)] flex-col justify-between bg-white px-2 py-4 pt-20 text-gray-600 shadow-xl ">
      <header className="flex flex-col items-center gap-4">
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
