import { useState } from "react";
import { FormInput } from "./FormInput";
import { SignUpInput } from "@prajwalk97/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
export const SignUp = ({ onClickHandler }: { onClickHandler: () => void }) => {
  const navigateTo = useNavigate();
  const [signUpInput, setSignUpInput] = useState<SignUpInput>({
    email: "",
    password: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>('');


  const postSignUpRequest = async () => {
    try {
      const resp = await axios.post(BACKEND_URL + "/api/v1/user/signup", { ...signUpInput });
      console.log(resp);
      localStorage.setItem('jwt', resp.data?.jwt);
      navigateTo("/");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message)
    }
  }
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center dark:bg-neutral-200">
        <div className="text-3xl font-extrabold mb-3">Create an Account</div>
        <div className="text-m mb-3 text-neutral-500">
          Already have an account?
          <button
            onClick={onClickHandler}
            className="px-2 font-bold text-blue-500 underline"
          >
            Sign In
          </button>
        </div>
        <div className="w-3/5">
          <FormInput
            label="Name"
            placeHolder="Name"
            onChange={(e) => {
              setSignUpInput({ ...signUpInput, name: e.target.value });
            }}
          />
          <FormInput
            label="Email"
            placeHolder="Email"
            onChange={(e) => {
              setSignUpInput({ ...signUpInput, email: e.target.value });
            }}
            type="email"
          />
          <FormInput
            label="Password"
            placeHolder="Password"
            onChange={(e) => {
              setSignUpInput({ ...signUpInput, password: e.target.value });
            }}
            type="password"
          />
        </div>
        {errorMessage ? <div className="p-2 font-bold text-red-700">{errorMessage}</div> : null}
        <button className="relative w-3/5 inline-flex items-center justify-center p-1 mt-8 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={postSignUpRequest}>
          <span className="relative  w-full px-5 p-1.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-blue-900 rounded-md group-hover:bg-opacity-0">
            Sign Up!
          </span>
        </button>
      </div>
    </>
  );
};
