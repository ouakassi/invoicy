// OverviewItem.js
import { motion } from "framer-motion";

const OverviewItem = ({ icon, header, text }) => {
  return (
    <div className="group flex w-80 grow items-center gap-10 rounded-lg border border-pink-200 bg-white p-8 px-10 font-medium shadow-xl transition-colors hover:bg-gradient-to-tr hover:from-pink-500 hover:to-pink-700">
      <motion.span className="w-14 transition-all group-hover:scale-125">
        <img src={icon} alt="" />
      </motion.span>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text font-mono text-lg font-bold capitalize text-transparent group-hover:text-white">
          {header}
        </p>
        <span className="font-josefin text-4xl group-hover:text-white">
          {text}
        </span>
      </div>
    </div>
  );
};

export default OverviewItem;
