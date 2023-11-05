export default function InputWithLabel({
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
  labelText,
  rest,
  className,
}) {
  return (
    <label className=" max-w-sm capitalize">
      {labelText}
      <input
        className={`w-full rounded-sm border-gray-300 px-2 py-2 shadow-sm focus-within:ring-sky-400  hover:border-sky-500 ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        {...rest}
      />
    </label>
  );
}
