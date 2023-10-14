import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Dropdown";

import {
  RiNotification3Line,
  RiCheckDoubleFill,
  RiDeleteBin5Line,
} from "react-icons/ri";

import { Button } from "../Button";

import NotificationMsg from "./NotificationMsg";

const notificationsList = [
  {
    msgType: "error",
    msgText: "Failed to send message. Please check your internet connection.",
    date: "2 hours ago",
  },
  {
    msgType: "alert",
    msgText: "You have a new message from John Doe.",
    date: "1 hour ago",
  },
  {
    msgType: "success",
    msgText: "Your payment was successful. Thank you for your purchase!",
    date: "30 minutes ago",
  },
  {
    msgType: "info",
    msgText: "A new version of the app is available. Click here to update.",
    date: "15 minutes ago",
  },
];

export default function NotificationPanel() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-sm p-2 text-xl outline-none hover:bg-sky-100">
        <RiNotification3Line />
        <span className="absolute top-1 rounded-full bg-sky-800 px-[8px] py-[3px] text-xs font-bold text-white">
          5
        </span>
      </DropdownMenuTrigger>
      {notificationsList.length !== 0 ? (
        <DropdownMenuContent
          side="bottom"
          className="min-w-[22rem] px-2 py-2 pb-8 "
          sideOffset={10}
        >
          <DropdownMenuLabel className="flex items-center justify-between rounded-xl  text-lg  ">
            {/* <div></div> */}
            <span className="ml-4 flex items-center gap-2  ">
              {/* <RiNotification2Fill className="text-sky-800" /> */}
              Notifications
            </span>

            <Button
              className="gap-1 text-xl text-red-600 hover:bg-red-50 hover:text-red-600 "
              variant="ghost"
            >
              <RiDeleteBin5Line />
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="mb-4" />

          {notificationsList.map(({ msgType, msgText, date }) => (
            <NotificationMsg
              msgType={msgType}
              msgText={msgText}
              msgDate={date}
            />
          ))}
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
  );
}
