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
    <DropdownMenu modal={false}>
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
          <DropdownMenuLabel className="flex items-center justify-between rounded-xl text-lg  ">
            <div className="ml-4 flex items-center gap-2  ">
              Notifications{" "}
              <span className="rounded-sm bg-sky-800 px-2 text-white ">8</span>
            </div>

            <Button
              className=" capitalize text-red-500 hover:bg-red-500 hover:text-red-50 hover:underline "
              variant="ghost"
            >
              Mark all as read
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="mb-4" />

          {notificationsList.map(({ msgType, msgText, date }, i) => (
            <NotificationMsg
              key={i}
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
