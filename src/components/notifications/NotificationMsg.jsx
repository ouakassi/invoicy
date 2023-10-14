import { RiAlbumLine } from "react-icons/ri";
import { DropdownMenuItem } from "../Dropdown";

const msgColorPalette = [
  { type: "error", textColor: "text-red-500", bgColor: "bg-red-50" },
  { type: "alert", textColor: "text-yellow-500", bgColor: "bg-yellow-50" },
  { type: "success", textColor: "text-green-500", bgColor: "bg-green-50" },
  { type: "info", textColor: "text-blue-500", bgColor: "bg-blue-50" },
];

export default function NotificationMsg({ msgType, msgText, msgDate }) {
  return msgColorPalette.map(({ type, textColor, bgColor }) =>
    type === msgType ? (
      <DropdownMenuItem
        className={`mb-2 flex justify-between gap-4 px-4  py-3 shadow-sm ${bgColor}`}
      >
        <div className="flex max-w-xs items-center gap-2">
          <RiAlbumLine className={textColor} />
          <span className={`font-medium first-letter:uppercase ${textColor}`}>
            {msgText}
          </span>
        </div>

        <span className="text-gray-500">{msgDate}</span>
      </DropdownMenuItem>
    ) : null,
  );
}
