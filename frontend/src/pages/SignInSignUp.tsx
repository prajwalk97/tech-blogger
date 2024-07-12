import { SignUp } from "../components/SignUp";
import { SignIn } from "../components/SignIn";
import { Quote } from "../components/Quote";
import { SetStateAction, useState } from "react";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState<Boolean>(false);
  const onClickHandler = () => {
    setIsSignUp((prev: SetStateAction<Boolean>) => !prev)
  }
  return (
    <>
      <div className="grid lg:grid-cols-2">
        {isSignUp ?
          <SignUp onClickHandler={onClickHandler} /> :
          <SignIn onClickHandler={onClickHandler} />
        }
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default SignInSignUp;
