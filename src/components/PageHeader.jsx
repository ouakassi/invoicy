import { Link } from "react-router-dom";

export default function PageHeader({ text, icon }) {
  return (
    <div className="flex w-full justify-between px-4 mt-4">
      <h1 className="uppercase font-bold text-2xl font-josefin  text-sky-800">
        invoices
      </h1>
      <Link
        type="submit"
        className=" flex max-w-xs capitalize justify-center items-center rounded-md bg-gradient-to-r from-sky-400 to-sky-600 px-4 py-2 text-m font-semibold leading-6 text-white shadow-md hover:from-sky-500 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        <span className="icon">{icon}</span>

        {text}
      </Link>
    </div>
  );
}
