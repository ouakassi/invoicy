import { useEffect, useRef } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

import { CiMail, CiLock } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";

import InputContainer from "../../components/form/InputContainer";

export default function RegisterPage() {
  const emailRef = useRef();

  const handleOnChange = () => {
    console.log(emailRef.current.value);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo />
          <h2 className="mt-10 text-center text-2xl font-medium  leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="register_email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <InputContainer
                type={"email"}
                id={"register_email"}
                name={"email"}
                icon={<CiMail />}
                options={{ autoComplete: "email" }}
                inputRef={emailRef}
                onChange={handleOnChange}
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="register_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <InputContainer
                type={"password"}
                id={"register_password"}
                name={"email"}
                icon={<CiLock />}
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="register_confirm-password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
              </div>
              <InputContainer
                type={"password"}
                id={"register_confirm-password"}
                name={"email"}
                icon={<CiLock />}
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-m flex w-full items-center justify-center rounded-md bg-gradient-to-r from-sky-400 to-sky-600 p-2 font-semibold leading-6 text-white shadow-md hover:from-sky-500 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <AiOutlineUserAdd className="icon" />
                Register
              </button>
            </div>
          </form>
          <div className=" mx-auto my-4 w-80 border-t-2 border-gray-200"></div>
          <p className=" mb-3 text-center font-sans text-sm font-semibold text-gray-800">
            Already have an account ?{" "}
          </p>
          <Link
            to="/auth/login"
            className="flex w-full justify-center rounded-md bg-sky-900 p-2 text-sm  font-semibold leading-6 text-white shadow-md hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
