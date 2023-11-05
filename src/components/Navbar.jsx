import { NavLink } from "react-router-dom";
import { useState } from "react";

import Logo from "./Logo";
import { RiLogoutBoxRLine, RiProfileLine } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar";
import USER_IMG from "@/assets/imgs/user.png";
import NotificationPanel from "./notifications/NotificationPanel";

const userDropdownItems = [
  { icon: <RiProfileLine />, text: "Profile" },
  { icon: <RiLogoutBoxRLine />, text: "Deconnecte" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <header
      className={`fixed flex h-[3.5rem] w-full items-center justify-between bg-white  py-2 pl-2 pr-8 shadow-md 
    ${dark ? "dark" : null}`}
    >
      <NavLink to="overview">
        <Logo logoSize="w-[3rem]" text={true} />
      </NavLink>
      <nav className="flex gap-8 dark:bg-blue-950">
        <NotificationPanel />
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none focus:ring-2 ">
            <Avatar>
              <AvatarImage className="p-1 hover:bg-sky-200" src={USER_IMG} />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset="2" className="mx-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <button onClick={() => setDark(!dark)}>DARK</button>
            {userDropdownItems.map(({ icon, text }, i) => {
              return (
                <DropdownMenuItem
                  key={i}
                  className="cursor-pointer gap-2 px-4 last:text-red-500 hover:bg-red-400 last:hover:text-red-600"
                >
                  <span className="text-lg">{icon}</span> <span>{text}</span>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
