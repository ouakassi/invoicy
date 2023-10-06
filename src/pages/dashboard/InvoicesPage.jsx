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

import { FaEye } from "react-icons/fa";

import {
  BsAlignMiddle,
  BsCheck2Circle,
  BsClockHistory,
  BsDash,
  BsExclamationCircle,
  BsFileEarmarkCheckFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillExclamationSquareFill,
  BsQuestionCircle,
  BsShieldLock,
} from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { PiTableLight } from "react-icons/pi";
import { SiHashnode } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/Tooltip";

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

  {
    id: 11,
    title: "Laptop",
    date: "2023-10-01",
    client: "John's Electronics",
    total: 1000,
    status: "Pending",
  },
  {
    id: 12,
    title: "Website Development",
    date: "2023-10-02",
    client: "Tech Solutions Inc.",
    total: 1500,
    status: "Paid",
  },
  {
    id: 13,
    title: "Office Chairs",
    date: "2023-10-03",
    client: "Furniture Emporium",
    total: 1200,
    status: "Unpaid",
  },
  {
    id: 14,
    title: "Graphic Design Service",
    date: "2023-10-04",
    client: "Design Innovations",
    total: 2000,
    status: "Paid",
  },
  {
    id: 15,
    title: "Printer",
    date: "2023-10-05",
    client: "Print Master Co.",
    total: 800,
    status: "Pending",
  },
  {
    id: 16,
    title: "Mobile App Development",
    date: "2023-10-06",
    client: "App Creators Ltd.",
    total: 1700,
    status: "Paid",
  },
  {
    id: 17,
    title: "Office Desks",
    date: "2023-10-07",
    client: "Desk World",
    total: 1300,
    status: "Unpaid",
  },
  {
    id: 18,
    title: "IT Consultation",
    date: "2023-10-08",
    client: "Tech Experts LLC",
    total: 1800,
    status: "Paid",
  },
  {
    id: 19,
    title: "Coffee Machine",
    date: "2023-10-09",
    client: "Coffee Lovers Co.",
    total: 900,
    status: "Unpaid",
  },
  {
    id: 21,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 22,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 23,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 24,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 25,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 26,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 27,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 28,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 29,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 30,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 31,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 32,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 33,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 34,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 35,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 36,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 37,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 38,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 39,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 40,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 41,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 42,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 43,
    title: "SEO Services",
    date: "2023-10-10",
    client: "Search Boost Agency",
    total: 1600,
    status: "Archived",
  },
  {
    id: 44,
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
const ItemsPerPage = 10;

export default function InvoicesPage() {
  // states
  const [tableFilter, setTableFilter] = useState("all");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  //handlers
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  function handleTabFilter(value) {
    setTableFilter(value);
    setCurrentPage(1);
  }

  const filteredAndPaginatedData = dataArray.filter(
    ({ status }) =>
      !tableFilter ||
      tableFilter === "all" ||
      status.toLowerCase() === tableFilter.toLowerCase(),
  );

  const totalPages = Math.ceil(filteredAndPaginatedData.length / ItemsPerPage);
  const startIndex = (currentPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const paginatedData = filteredAndPaginatedData.slice(startIndex, endIndex);

  return (
    <>
      <PageHeader icon={<RiFileAddLine />} text={"new invoice"} />
      <div className="mb-4"></div>
      <div className="flex items-center justify-between">
        <Tabs defaultValue="account">
          <TabsList className=" bg-gradient-to-t from-sky-500 to-sky-700  text-gray-100 shadow-lg [&>button:hover]:bg-sky-800 [&>button:hover]:text-white [&>button]:px-4">
            {tabsHeaderData.map(({ value, title, icon }) => {
              return (
                <TabsTrigger
                  onClick={() => handleTabFilter(value)}
                  key={title}
                  value={value}
                >
                  <span className="mr-1 text-sm">{icon}</span>
                  <span className="capitalize">{title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <div className=" max-w-7xl items-center ">
          <div className="max-auto w-full justify-center text-center ">
            <span className="isolate mx-auto inline-flex justify-center rounded-xl shadow-sm">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                type="button"
                className={`relative inline-flex items-center rounded-l-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  currentPage === 1
                    ? "cursor-not-allowed text-neutral-400"
                    : null
                }`}
              >
                <BsFillCaretLeftFill />
              </button>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <span className="flex items-center space-x-2">
                  <span>{currentPage}</span>
                  <BsDash />
                  <span>{totalPages}</span>
                </span>
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={endIndex >= filteredAndPaginatedData.length}
                type="button"
                className={`relative -ml-px inline-flex items-center rounded-r-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  endIndex >= filteredAndPaginatedData.length
                    ? "cursor-not-allowed text-neutral-400"
                    : null
                }`}
              >
                <BsFillCaretRightFill />
              </button>
            </span>
          </div>
        </div>
      </div>

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

        {paginatedData.map(({ id, title, date, client, total, status }, i) => {
          const myDate = new Date(date);
          return (
            <tbody className="divide-y divide-gray-200 rounded-sm dark:divide-gray-700 ">
              <motion.tr
                initial={{ opacity: [0, 0.2, 0.5], y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={id}
                className=" rounded-md bg-white font-josefin text-base transition-colors  hover:bg-gray-100 "
              >
                <td className="group h-px w-px cursor-pointer whitespace-nowrap py-4 ">
                  <div className="flex items-center justify-center gap-1 rounded-sm px-1  py-1 pl-6 pr-6 text-sky-800 group-hover:underline lg:pl-3 xl:px-4">
                    {/* <TbLayoutAlignMiddle /> */}
                    <SiHashnode />
                    <span>INV-{id.toString().padStart(5, "0")}</span>
                  </div>
                </td>
                <td className="h-px w-72 whitespace-nowrap ">
                  <div className="flex items-center justify-start gap-1 px-6 py-3">
                    <TbFileInvoice />
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
                              key={statusTitle}
                              className={`rounded-md ${bgColor} flex grow items-center  gap-2 p-2 text-center font-sans  text-sm font-semibold capitalize ${color} shadow-sm`}
                            >
                              {icon}
                              {status}
                            </span>
                          );
                        }
                        return null;
                      },
                    )}
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap text-center">
                  <div className="flex px-2 py-1.5">
                    <TooltipProvider delayDuration="200">
                      <Tooltip>
                        <TooltipTrigger className="rounded-sm p-3 transition-colors  hover:bg-slate-200 ">
                          <FaEye />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Preview</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider delayDuration="200">
                      <Tooltip>
                        <TooltipTrigger className="rounded-sm p-3 transition-colors hover:bg-slate-200 ">
                          <RiEditCircleLine />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <AlertDialog>
                      <TooltipProvider delayDuration="200">
                        <Tooltip>
                          <AlertDialogTrigger>
                            <TooltipTrigger className="gap-2 rounded-sm p-3 font-semibold text-red-600 transition-colors hover:bg-red-100  ">
                              <RiDeleteBin3Line />
                            </TooltipTrigger>
                          </AlertDialogTrigger>
                          <TooltipContent className="bg-red-600 text-red-100">
                            <p>Delete</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex items-center gap-2 ">
                            <BsExclamationCircle className="text-2xl text-red-800" />
                            Are you completely certain about deleting invoice?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Please note that this action is irreversible. It
                            will permanently remove the invoice row from your
                            records.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel
                            onClick={() => setIsEditDialogOpen(false)}
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction className="bg-red-700 hover:bg-red-600">
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </td>
              </motion.tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
