import loginBackgroundImage from "../assets/loginBackground.png";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

function LeftStatic() {
  return (
    <div className="w-full h-full hidden md:block relative">
      {/* Logo */}
      <motion.div
        className="absolute top-5 left-5 text-2xl lg:text-5xl flex items-center text-white z-10"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <MessageCircle className="mr-3 text-violet-400 w-10 lg:w-15 lg:h-15" />
        Vibe<i className="text-violet-400">Chat</i>
      </motion.div>

      {/* Background Image */}
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <img
          src={loginBackgroundImage}
          alt="loginImage"
          className="w-full h-full object-cover opacity-70 rounded-[inherit]"
        />

        <motion.div
          className="absolute left-20 bottom-20 text-3xl text-[#ffffff73] leading-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            duration: 1.2,
          }}
        >
          Access Your World in One Click. <br />
          Talk. Share. Connect.
        </motion.div>
      </div>
    </div>
  );
}

export default LeftStatic;
