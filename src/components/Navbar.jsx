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

const userDropdownItems = [
  { icon: <RiProfileLine />, text: "Profile" },
  { icon: <RiLogoutBoxRLine />, text: "Deconnecte" },
];

export default function Navbar() {
  const notifications = 1;
  return (
    <header className="w-full h-[3.5rem] flex items-center justify-between fixed  pr-8 pl-2 py-2 bg-white shadow-md">
      <NavLink to="overview">
        <Logo logoSize="w-[3rem]" text={true} />
      </NavLink>
      <nav className="flex gap-8 ">
        {/* <InputContainer icon={<RiSearch2Line />} /> */}

        <DropdownMenu>
          <DropdownMenuTrigger className="text-xl p-2 hover:bg-sky-100 rounded-sm outline-none">
            <RiNotification3Line />
          </DropdownMenuTrigger>
          {notifications !== 0 ? (
            <DropdownMenuContent
              className="px-2 py-2 pb-8 min-w-[22rem] "
              sideOffset="2"
            >
              <DropdownMenuLabel className="text-lg flex justify-between items-center  rounded-xl text-black ">
                <span className="flex items-center gap-2  text-sky-500 ">
                  <RiNotification2Fill />
                  Notifications
                </span>{" "}
                <Button
                  className="text-red-600 text-xl hover:bg-red-100 hover:text-red-700"
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
              className="px-6 py-10 flex flex-col gap-4 text-sky-800 items-center justify-center  max-w-xs font-medium"
              sideOffset="2"
            >
              <p className="flex items-center gap-2">
                <RiCheckDoubleFill /> All clear for now!
              </p>
              <p className="font-light text-center text-black">
                New notifications will appear here when there's activity in your
                workspace.
              </p>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:ring-2 outline-none ">
            <Avatar>
              <AvatarImage size="1" src={USER_IMG} />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset="2" className="mx-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {userDropdownItems.map(({ icon, text }, i) => {
              return (
                <DropdownMenuItem
                  key={i}
                  className="gap-2 px-4 cursor-pointer hover:bg-red-400 last:text-red-500 last:hover:text-red-600"
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
