import { Link } from "react-router-dom";

export default function PageHeader({ headerText, btnText, btnIcon }) {
  return (
    <div className="mt-4 flex w-full justify-between px-4">
      <h1 className="font-josefin text-2xl font-bold uppercase  text-sky-800">
        {headerText}
      </h1>
      {btnIcon && (
        <Link
          type="submit"
          className=" text-m flex max-w-xs items-center justify-center rounded-md bg-gradient-to-r from-sky-400 to-sky-600 px-4 py-2 font-semibold capitalize leading-6 text-white shadow-md hover:from-sky-500 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        >
          <span className="icon">{btnIcon}</span>

          {btnText}
        </Link>
      )}
    </div>
  );
}
