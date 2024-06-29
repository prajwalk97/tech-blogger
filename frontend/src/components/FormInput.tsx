import { ChangeEventHandler } from "react";

interface FormInputType {
  label: string;
  placeHolder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const FormInput = ({
  label,
  placeHolder,
  type = "text",
  onChange,
}: FormInputType) => {
  return (
    <>
      <div>
        <label
          htmlFor="first_name"
          className="block mt-2 text-m font-medium text-gray-900"
        >
          {label}
        </label>
        <input
          className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeHolder}
          required
          type={type}
          onChange={onChange}
        />
      </div>
    </>
  );
};
