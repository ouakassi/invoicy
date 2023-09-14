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
    <div className="group flex p-1 items-center justify-center w-full rounded-md  text-gray-900 shadow-sm ring-1 ring-gray-300  hover:ring-sky-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-400 focus-within: sm:text-sm sm:leading-6">
      {icon && (
        <span className="group-focus-within:text-sky-500 icon text-2xl mx-2 ">
          {icon}
        </span>
      )}
      <input
        className="block w-full px-1 border-0 focus:ring-0 text-gray-900 sm:text-sm "
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
          className="text-xl px-2 hover:text-sky-500 cursor-pointer  "
        >
          {isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
        </span>
      )}
    </div>
  );
}
