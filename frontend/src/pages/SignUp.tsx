import { Authenticator } from "../components/Authenticator";
import { Quote } from "../components/Quote";

const SignUp = () => {
  return (
    <>
      <div></div>
      <div className="grid lg:grid-cols-2">
        <Authenticator />
        <div className="invisible lg:visible">
          <Quote />
        </div>
      </div>
    </>
  );
};

export default SignUp;
