import { RiAlbumLine } from "react-icons/ri";
import { DropdownMenuItem } from "../Dropdown";

export default function NotificationMsg({ msg, msgDate }) {
  return (
    <DropdownMenuItem className="px-4 py-4 flex gap-4 justify-between  ">
      <div className="flex items-center gap-2">
        <RiAlbumLine />
        <span className="font-medium  first-letter:uppercase">{msg}</span>
      </div>

      <span className="text-gray-400">{msgDate}</span>
    </DropdownMenuItem>
  );
}
