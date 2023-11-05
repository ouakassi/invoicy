import {
  FiAlertCircle,
  FiAlertTriangle,
  FiCheckSquare,
  FiHelpCircle,
  FiSlash,
} from "react-icons/fi";
import { DropdownMenuItem } from "../Dropdown";

const msgColorPalette = [
  {
    type: "error",
    icon: <FiSlash />,
    textColor: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    type: "alert",
    icon: <FiAlertTriangle />,
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    type: "success",
    icon: <FiCheckSquare />,
    textColor: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    type: "info",
    icon: <FiHelpCircle />,
    textColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
];

export default function NotificationMsg({ msgType, msgText, msgDate }) {
  return msgColorPalette.map(({ type, icon, textColor, bgColor }) =>
    type === msgType ? (
      <DropdownMenuItem
        key={type}
        className={`mb-2 flex justify-between gap-4 px-4  py-3 shadow-sm ${bgColor}`}
      >
        <div className="flex max-w-xs items-center gap-2">
          <span className={`mr-2 text-xl ${textColor}`}>{icon}</span>
          <span className={`font-medium first-letter:uppercase ${textColor}`}>
            {msgText}
          </span>
        </div>

        <span className="font-josefin text-gray-500">{msgDate}</span>
      </DropdownMenuItem>
    ) : null,
  );
}
