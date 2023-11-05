import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function InputContainer({
  icon,
  type,
  id,
  name,
  inputRef,
  onChange,
  options,
}) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="group flex w-full items-center justify-center rounded-md  p-1 text-gray-900 shadow-sm ring-1  ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-400 hover:ring-sky-500 sm:text-sm sm:leading-6">
      {icon && (
        <span className="icon mx-2 text-2xl group-focus-within:text-sky-500 ">
          {icon}
        </span>
      )}
      <input
        className="block w-full border-0 px-1 text-gray-900 focus:ring-0 sm:text-sm "
        id={id}
        name={name}
        type={
          isPasswordVisible ? (!isPasswordVisible ? "password" : "text") : type
        }
        ref={inputRef}
        onChange={onChange}
        {...options}
      />
      {type === "password" && (
        <span
          onClick={handleTogglePassword}
          className="cursor-pointer px-2 text-xl hover:text-sky-500  "
        >
          {isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
        </span>
      )}
    </div>
  );
}
