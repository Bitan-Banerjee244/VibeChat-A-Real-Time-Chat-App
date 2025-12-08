import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import { CircleUser, Mail, KeyRound, Eye, EyeClosed } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  let [password, showPassword] = useState<boolean>(false);
  let navigate = useNavigate();

  return (
    <>
      <div
        id="signin"
        className="w-full h-[85%] lg:h-full text-white flex justify-center items-center
            bg-linear-to-b from-[#011227] via-[#170335]  to-[#0a001a68] p-6 rounded-2xl shadow-violet-950 shadow-sm "
      >
        <form action="" className="w-full max-h-[80%] flex flex-col gap-7">
          <span className=" text-3xl lg:text-4xl w-full h-[15%]">
            Create an account
          </span>

          {/* // Form Input  */}
          <div
            className="w-full h-[85%] flex flex-col gap-12"
            id="formElemContainer"
          >
            {/* name */}
            <div className="nameContainer w-full h-5 flex gap-2">

              {/* First Name */}
              <InputGroup className="w-1/2 h-[50px]">
                <InputGroupInput placeholder="First Name" autoFocus required />
                <InputGroupAddon>
                  <CircleUser />
                </InputGroupAddon>
              </InputGroup>
              {/* Last Name */}
              <InputGroup className="w-1/2 h-[50px]">
                <InputGroupInput placeholder="Last Name" />
              </InputGroup>
            </div>

            {/* Mail */}
            <div className="w-full h-5">
              <InputGroup className="h-[50px]">
                <InputGroupInput
                  placeholder="Enter Your email"
                  type="email"
                  required
                />
                <InputGroupAddon>
                  <Mail />
                </InputGroupAddon>
              </InputGroup>
            </div>
            
            {/* Password */}
            <div className="w-full h-5">
              <InputGroup className="h-[50px]">
                <InputGroupInput
                  type={password ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="p-2"
                  required
                />
                <InputGroupAddon>
                  <KeyRound />
                </InputGroupAddon>
                <InputGroupAddon
                  align={"inline-end"}
                  onClick={() => showPassword((prev) => !prev)}
                  className="cursor-pointer"
                >
                  {password ? <Eye /> : <EyeClosed />}
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="w-full flex flex-col gap-4 mt-4 buttonContainer">
            {/* Create Account Button */}
            <div className="w-full h-[50px]">
              <Button
                className="w-full h-full bg-purple-500 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                size="icon-lg"
                type="submit"
              >
                Create account
              </Button>
            </div>

            {/* // Line  */}
            <div className="flex items-center gap-2 my-1 lg:my-5">
              {/* Left line */}
              <div className="flex-1 h-px bg-white/50"></div>

              {/* OR text */}
              <span className="text-white/70 font-semibold">OR</span>

              {/* Right line */}
              <div className="flex-1 h-px bg-white/50"></div>
            </div>

            {/* Login with Google */}
            <div className="buttonContainer w-full h-[50px]">
              <Button className="w-full h-full flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-black font-semibold rounded-lg transition-colors cursor-pointer">
                <FcGoogle />
                Login with Google
              </Button>
            </div>
          </div>

          {/* Already Have an account */}
          <div className="text-center">
            Already have an account ?{"  "}
            <span
              className="text-violet-500 cursor-pointer"
              onClick={() => navigate("/auth/login")}
            >
              {" "}
              Login
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
