import { useState } from "react";
import axios from "axios";
import { SignInInput } from "@prajwalk97/core";
import { useNavigate } from "react-router-dom";

import { FormInput } from "./FormInput";
import { BACKEND_URL } from "../config";
import { useDispatch } from "react-redux";



export const SignIn = ({ onClickHandler }: { onClickHandler: () => void }) => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch();
    const [signInInput, setSignInInput] = useState<SignInInput>({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState<string>('');

    const postSignUpRequest = async () => {
        try {
            const resp = await axios.post(BACKEND_URL + "/api/v1/user/signin", { ...signInInput });
            localStorage.setItem('jwt', resp.data.jwt);
            console.log(resp)
            dispatch({
                type: "UPDATE_JWT", payload: {
                    jwt: resp.data?.jwt
                }
            })
            navigateTo("/");
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message)
        }
    }
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center dark:bg-neutral-200">
                <div className="text-3xl font-extrabold mb-3">Sign into your Account</div>
                <div className="text-m mb-3 text-neutral-500">
                    Don't have an account?
                    <button
                        onClick={onClickHandler}
                        className="px-2 font-bold text-blue-500 underline "
                    >
                        Sign Up
                    </button>
                </div>
                <div className="w-3/5">
                    <FormInput
                        label="Email"
                        placeHolder="Email"
                        onChange={(e) => {
                            setSignInInput({ ...signInInput, email: e.target.value });
                        }}
                        type="email"
                    />
                    <FormInput
                        label="Password"
                        placeHolder="Password"
                        onChange={(e) => {
                            setSignInInput({ ...signInInput, password: e.target.value });
                        }}
                        type="password"
                    />
                </div>
                {errorMessage ? <div className="p-2 font-bold text-red-700">{errorMessage}</div> : null}
                <button className="relative w-3/5 inline-flex items-center justify-center p-1 mt-8 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative w-full px-5 p-1.5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-blue-900 rounded-md group-hover:bg-opacity-0"
                        onClick={postSignUpRequest}>
                        Sign In
                    </span>
                </button>
            </div>
        </>
    );
};

