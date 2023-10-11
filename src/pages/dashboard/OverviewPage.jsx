import { BiDollarCircle } from "react-icons/bi";

import revenueIcon from "../../assets/imgs/overview-icons/money-bag.png";
import invoiceIcon from "../../assets/imgs/overview-icons/invoice.png";
import clientIcon from "../../assets/imgs/overview-icons/clients.png";

import PageHeader from "../../components/PageHeader";
import { motion } from "framer-motion";

const overviewItems = [
  {
    icon: revenueIcon,
    header: "total revenue",
    text: "$ 216K",
  },
  {
    icon: invoiceIcon,
    header: "invoices",
    text: "2213",
  },
  {
    icon: clientIcon,
    header: "clients",
    text: "1068",
  },
];

export default function OverviewPage() {
  return (
    <>
      <PageHeader headerText={"overview"} />
      <div className="mt-8 flex justify-center gap-8">
        {overviewItems.map(({ icon, header, text }, i) => {
          console.log(icon);
          return (
            <div
              key={i}
              className="group flex min-w-[25rem] items-center gap-10 rounded-lg border border-pink-200 bg-white p-8 px-10 font-medium shadow-xl transition-colors hover:bg-gradient-to-tr hover:from-pink-500 hover:to-pink-700"
            >
              <motion.span className="w-14 transition-all group-hover:scale-125">
                <img src={icon} alt="" />
              </motion.span>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text font-mono text-lg font-bold capitalize text-transparent  group-hover:text-white">
                  {header}
                </p>

                <span className="font-josefin text-4xl group-hover:text-white">
                  {text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
