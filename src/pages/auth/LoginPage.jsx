import { useEffect } from "react";
import LOGO_IMG from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import RegisterPage from "./RegisterPage";

export default function LoginPage() {
  useEffect(() => {});

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="logo__container flex justify-center items-center gap-2">
            <img src={LOGO_IMG} alt="logo" className="logo__img w-20" />
            <span className=" font-roboto font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-500  uppercase">
              invoicy
            </span>
          </div>
          <h2 className="  mt-10 text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-md ring-1 ring-gray-300  hover:ring-sky-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-1 ring-gray-300 ring-inset  hover:ring-sky-500 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Sign in
              </button>
            </div>
            <div className="text-right text-sm">
              <a
                href="#"
                className=" font-semibold underline text-sky-500 hover:text-sky-400 "
              >
                Forgot password?
              </a>
            </div>
          </form>

          <p className="mt-10 text-center text-m text-gray-500">
            Not registred yet?{" "}
            <Link
              to="/auth/RegisterPage"
              className="font-semibold leading-6 text-sky-600 hover:text-sky-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
