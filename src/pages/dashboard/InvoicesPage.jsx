import { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import {
  RiDeleteBin3Line,
  RiEditBoxLine,
  RiFileAddLine,
  RiFileCopy2Fill,
  RiFileHistoryFill,
  RiFileLockFill,
  RiEditCircleLine,
  RiFileUserLine,
  RiFileWarningFill,
  RiTimeLine,
} from "react-icons/ri";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { TbDots, TbFileInvoice, TbLayoutAlignMiddle } from "react-icons/tb";
import {
  BsCheck2Circle,
  BsClockHistory,
  BsExclamationCircle,
  BsFileEarmarkCheckFill,
  BsFillExclamationSquareFill,
  BsQuestionCircle,
  BsShieldLock,
} from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { PiTableLight } from "react-icons/pi";
import { SiHashnode } from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/Tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/Dropdown";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/AlertDialog";
import { useEffect } from "react";

const tabsHeaderData = [
  {
    title: "All invoices",
    icon: <RiFileCopy2Fill />,
    value: "all",
  },
  {
    title: "paid",
    icon: <BsFileEarmarkCheckFill />,
    value: "paid",
  },
  {
    title: "unpaid",
    icon: <RiFileWarningFill />,
    value: "unpaid",
  },
  {
    title: "pending",
    icon: <RiFileHistoryFill />,
    value: "pending",
  },
  {
    title: "archived",
    icon: <RiFileLockFill />,
    value: "archived",
  },
];

const tableHeaderTitles = [
  "id",
  "title",
  "date",
  "client",
  "total",
  "status",
  "action",
];

const dataArray = [
  {
    id: 1,
    title: "Laptop",
    date: "2023-10-01",
    client: "John's Electronics",
    total: 1000,
    status: "Pending",
  },
  {
    id: 2,
    title: "Website Development",
    date: "2023-10-02",
    client: "Tech Solutions Inc.",
    total: 1500,
    status: "Paid",
  },
  {
    id: 3,
    title: "Office Chairs",
    date: "2023-10-03",
    client: "Furniture Emporium",
    total: 1200,
    status: "Unpaid",
  },
  {
    id: 4,
    title: "Graphic Design Service",
    date: "2023-10-04",
    client: "Design Innovations",
    total: 2000,
    status: "Paid",
  },
  {
    id: 5,
    title: "Printer",
    date: "2023-10-05",
    client: "Print Master Co.",
    total: 800,
    status: "Pending",
  },
  {
    id: 6,
    title: "Mobile App Development",
    date: "2023-10-06",
    client: "App Creators Ltd.",
    total: 1700,
    status: "Paid",
  },
  {
    id: 7,
    title: "Office Desks",
    date: "2023-10-07",
    client: "Desk World",
    total: 1300,
    status: "Unpaid",
  },
  {
    id: 8,
    title: "IT Consultation",
    date: "2023-10-08",
    client: "Tech Experts LLC",
    total: 1800,
    status: "Paid",
  },
  {
    id: 9,
    title: "Coffee Machine",
    date: "2023-10-09",
    client: "Coffee Lovers Co.",
    total: 900,
    status: "Unpaid",
  },
  {
    id: 10,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
];

const statusColor = [
  {
    statusTitle: "paid",
    icon: <BsCheck2Circle />,

    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    statusTitle: "unpaid",
    icon: <BsExclamationCircle />,

    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    statusTitle: "pending",
    icon: <BsClockHistory />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    statusTitle: "archived",
    icon: <BsShieldLock />,

    color: "text-gray-500",
    bgColor: "bg-gray-100",
  },
];

export default function InvoicesPage() {
  const [tableFilter, setTableFilter] = useState("");

  return (
    <>
      <PageHeader icon={<RiFileAddLine />} text={"new invoice"} />
      <div className="mb-4"></div>
      <Tabs defaultValue="account">
        <TabsList className=" bg-gradient-to-t from-sky-500 to-sky-700  text-gray-100 shadow-lg [&>button:hover]:bg-sky-800 [&>button:hover]:text-white [&>button]:px-4">
          {tabsHeaderData.map(({ value, title, icon }) => {
            return (
              <TabsTrigger
                onClick={() => setTableFilter(value)}
                key={title}
                value={value}
              >
                <span className="mr-1 text-sm">{icon}</span>
                <span className="capitalize">{title}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* <TabsContent value="">Make changes to your account here.</TabsContent> */}
      </Tabs>

      <table className="mt-4 min-w-full divide-y divide-gray-200  dark:divide-gray-700">
        <thead className="bg-sky-900 dark:bg-slate-800">
          <tr>
            {tableHeaderTitles.map((title) => {
              return (
                <th key={title} scope="col" className="px-6 py-3 text-left ">
                  <div className="flex items-center justify-center gap-x-2">
                    <span className="text-sm font-semibold uppercase tracking-wide text-white">
                      {title}
                    </span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        {dataArray
          .filter(
            ({ status }) =>
              !tableFilter ||
              tableFilter === "all" ||
              status.toLowerCase() === tableFilter,
          )
          .map(({ id, title, date, client, total, status }, i) => {
            const myDate = new Date(date);
            return (
              <tbody className="divide-y divide-gray-200 rounded-sm dark:divide-gray-700 ">
                <motion.tr
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={id}
                  className=" rounded-md bg-white font-josefin text-base "
                >
                  <td className="h-px w-px whitespace-nowrap py-4">
                    <div className=" flex items-center justify-center gap-1 rounded-sm  px-1 py-1 pl-6 pr-6 text-sky-800 lg:pl-3 xl:px-4">
                      {/* <TbLayoutAlignMiddle /> */}
                      <SiHashnode />
                      <span>INV-{id.toString().padStart(5, "0")}</span>
                    </div>
                  </td>
                  <td className="h-px w-72 whitespace-nowrap ">
                    <div className="flex items-center justify-start gap-1 px-6 py-3">
                      {/* <TbFileInvoice /> */}
                      <span>{title}</span>
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2 px-6 py-3  text-gray-600">
                      <MdOutlineDateRange />
                      <span>{myDate.toLocaleDateString()}</span>
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      <div className="flex items-center gap-2  text-slate-500">
                        <RiFileUserLine />
                        <span>{client}</span>
                      </div>
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className="flex justify-center gap-2 px-6 py-3  font-bold">
                      {/* <LiaMoneyBillWaveSolid /> */}
                      <span className="text-sm text-green-900">{total} $</span>
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap">
                    <div className=" flex px-6 py-1.5 ">
                      {statusColor.map(
                        ({ statusTitle, icon, color, bgColor }) => {
                          if (
                            status.toLowerCase() === statusTitle.toLowerCase()
                          ) {
                            return (
                              <span
                                key={statusTitle} // Add a unique key for each element when mapping over an array
                                className={`rounded-md ${bgColor} flex grow items-center  gap-2 p-2 text-center font-sans  text-sm font-semibold capitalize ${color} shadow-sm`}
                              >
                                {icon}
                                {status}
                              </span>
                            );
                          }
                          return null; // If the condition is not met, return null or an empty fragment
                        },
                      )}
                    </div>
                  </td>
                  <td className="h-px w-px whitespace-nowrap text-center">
                    <div className="px-6 py-1.5">
                      <DropdownMenu>
                        <AlertDialog>
                          <DropdownMenuTrigger className="rounded-md p-2 hover:bg-sky-100">
                            <TbDots />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem className="gap-2 font-semibold">
                              <PiTableLight />
                              <span>Preview</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 font-semibold text-cyan-700">
                              <RiEditCircleLine />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem className="gap-2 font-semibold text-red-600 hover:bg-red-300">
                                <RiDeleteBin3Line />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                          </DropdownMenuContent>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="flex items-center gap-2 ">
                                <BsFillExclamationSquareFill className="text-2xl text-red-800" />
                                Are you completely certain about deleting
                                invoice?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Please note that this action is irreversible. It
                                will permanently remove the invoice row from
                                your records.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction className="bg-red-700 hover:bg-red-600">
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenu>
                    </div>
                  </td>
                </motion.tr>
              </tbody>
            );
          })}
      </table>

      {/* <div className="flex mt-4 py-2 px-4 uppercase font-roboto rounded-md font-bold  bg-sky-900 text-white   ">
          <span></span>
          <span>Invoice ID</span>
          <span>Title</span>
          <span>Date</span>
          <span>Client</span>
          <span>Total</span>
          <span>Status</span>
          <div className="flex gap-4 "></div>
        </div>
        <div className="flex items-center capitalize  justify-between  py-2 px-4  rounded-md shadow-md bg-white border-solid border-2 hover:border-sky-400">
          <span>
            <RiFileTextLine />
          </span>
          <span>#INV548</span>
          <span>new materials</span>
          <span>03/04/2023</span>
          <span>Dr Stone</span>
          <span>5005$</span>
          <span>unpaid</span>
          <div className="flex gap-2">
            <RiEditBoxLine />
            <RiDeleteBin3Line />
          </div>
        </div> */}
      {tabsHeaderData.map(({ title }) => {
        return;
        <>
          <div>
            <span>id</span>
            <span>{title}</span>
          </div>
          <div>
            <span>name</span>
            {title + 1}
          </div>
        </>;
      })}
    </>
  );
}
