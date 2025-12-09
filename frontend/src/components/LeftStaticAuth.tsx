import loginBackgroundImage from "../assets/loginBackground.png";
import { MessageCircle } from "lucide-react";

function LeftStatic() {
  return (
    <div className="w-full h-full hidden md:block relative">
      {/* Logo */}
      <span className="absolute top-5 left-5 text-2xl lg:text-5xl flex items-center text-white z-10">
        <MessageCircle className="mr-3 text-violet-400 w-10 lg:w-15 lg:h-15" /> 
        Vibe<i className="text-violet-400">Chat</i>
      </span>

      {/* Background Image */}
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <img
          src={loginBackgroundImage}
          alt="loginImage"
          className="w-full h-full object-cover opacity-70 rounded-[inherit]"
        />

        <span className="absolute left-20 bottom-20 text-3xl text-[#ffffff73] leading-10">
          Access Your World in One Click. <br />
          Talk. Share. Connect.
        </span>
        
      </div>
    </div>
  );
}

export default LeftStatic;
