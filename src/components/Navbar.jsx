import Logo from "./Logo";
import {
  RiSearch2Line,
  RiNotification3Line,
  RiLogoutBoxRLine,
  RiProfileLine,
  RiCheckDoubleFill,
  RiNotification2Fill,
  RiDeleteBin5Line,
} from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/Dropdown";

import { Avatar, AvatarFallback, AvatarImage } from "../components/Avatar";
import USER_IMG from "../assets/imgs/user.png";
import { NavLink } from "react-router-dom";
import NotificationMsg from "./notifications/NotificationMsg";
import { Button } from "../components/Button";
import { useState } from "react";

const userDropdownItems = [
  { icon: <RiProfileLine />, text: "Profile" },
  { icon: <RiLogoutBoxRLine />, text: "Deconnecte" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const notifications = 1;
  return (
    <header
      className={`fixed flex h-[3.5rem] w-full items-center justify-between bg-white  py-2 pl-2 pr-8 shadow-md 
    ${dark ? "dark" : null}`}
    >
      <NavLink to="overview">
        <Logo logoSize="w-[3rem]" text={true} />
      </NavLink>
      <nav className="flex gap-8 dark:bg-blue-950">
        {/* <InputContainer icon={<RiSearch2Line />} /> */}

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-sm p-2 text-xl outline-none hover:bg-sky-100">
            <RiNotification3Line />
            <span className="absolute top-1 rounded-full bg-sky-800 px-[8px] py-[3px] text-xs font-bold text-white">
              5
            </span>
          </DropdownMenuTrigger>
          {notifications !== 0 ? (
            <DropdownMenuContent
              className="min-w-[22rem] px-2 py-2 pb-8 "
              sideOffset="2"
            >
              <DropdownMenuLabel className="flex items-center justify-between rounded-xl  text-lg  ">
                <div></div>
                <span className="ml-4 flex items-center gap-2  ">
                  <RiNotification2Fill className="text-sky-800" />
                  Notifications
                </span>

                <Button
                  className="text-xl text-red-600 hover:bg-red-100 hover:text-red-700"
                  variant="link"
                >
                  <RiDeleteBin5Line />
                </Button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="mb-4" />
              <NotificationMsg msg={"edited succusfuly"} msgDate={"2h"} />
              <NotificationMsg
                msg={"error can not edited succusfuly"}
                msgDate={"2h"}
              />
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent
              className="flex max-w-xs flex-col items-center justify-center gap-4 px-6 py-10  font-medium text-sky-800"
              sideOffset="2"
            >
              <p className="flex items-center gap-2">
                <RiCheckDoubleFill /> All clear for now!
              </p>
              <p className="text-center font-light text-black">
                New notifications will appear here when there's activity in your
                workspace.
              </p>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

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
