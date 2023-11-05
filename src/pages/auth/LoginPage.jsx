import { useEffect } from "react";
import Logo from "@/components/Logo";

import { Link } from "react-router-dom";

import { CiMail, CiLock } from "react-icons/ci";
import { BsGithub, BsGoogle, BsFacebook } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";

import InputContainer from "@/components/form/InputContainer";

export default function LoginPage() {
  useEffect(() => {});

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo />
          <h2 className=" mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="login_email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <InputContainer
                type={"email"}
                id={"login_email"}
                name={"email"}
                icon={<CiMail />}
                options={{ autoComplete: "email" }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="login_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <InputContainer
                type={"password"}
                id={"login_password"}
                name={"email"}
                icon={<CiLock />}
              />
            </div>

            <div className="text-right text-sm">
              <Link
                to={"/auth/forgot-password"}
                className=" font-semibold text-sky-500 hover:text-sky-400 "
              >
                Forgot password?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="text-m flex w-full items-center justify-center rounded-md bg-gradient-to-r from-sky-400 to-sky-600 p-2 font-semibold leading-6 text-white shadow-md hover:from-sky-500 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <BiLogInCircle className="icon" />
                Login
              </button>
            </div>
            <div className=" flex w-full justify-center  gap-5">
              <button className="rounded-full bg-slate-800 p-2 text-2xl text-white shadow-md hover:shadow-xl focus:ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ">
                <BsGithub />
              </button>
              <button className="rounded-full bg-red-700 p-2 text-2xl text-white shadow-md hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
                <BsGoogle />
              </button>
              <button className="rounded-full bg-blue-800 p-2 text-2xl text-white shadow-md hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-sky-400">
                <BsFacebook />
              </button>
            </div>
          </form>
          <div className=" mx-auto my-4 w-80 border-t-2 border-gray-200"></div>
          <p className=" mb-3 text-center font-sans text-sm font-semibold text-gray-800">
            Not registred yet?{" "}
          </p>
          <Link
            to="/auth/register"
            className="flex w-full justify-center rounded-md bg-sky-900 p-2  text-sm font-semibold leading-6 text-white shadow-md hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
