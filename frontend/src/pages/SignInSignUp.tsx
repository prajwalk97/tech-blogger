import { SignUp } from "../components/SignUp";
import { SignIn } from "../components/SignIn";
import { Quote } from "../components/Quote";
import { SetStateAction, useState } from "react";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState<Boolean>(true);
  const onClickHandler = () => {
    setIsSignUp((prev: SetStateAction<Boolean>) => !prev)
  }
  return (
    <>
      <div></div>
      <div className="grid lg:grid-cols-2">
        {isSignUp ?
          <SignUp onClickHandler={onClickHandler} /> :
          <SignIn onClickHandler={onClickHandler} />
        }
        <div className="invisible lg:visible">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default SignInSignUp;
