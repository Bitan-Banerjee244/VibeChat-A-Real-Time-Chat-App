import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WelcomePageProps {
  setStep: (step: number) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ setStep }) => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center 
      bg-linear-to-br from-[#010111] via-[#1a0f3c] to-[#020217] text-white p-4"
    >
      {/* Logo */}
      <motion.div
        className="text-7xl text-violet-500 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        <MessageCircle className="w-25 h-25" />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Welcome to <span>Vibe<i className="text-violet-600">Chat</i></span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-300 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Connect. Share. Chat. <br /> Your world in one click.
      </motion.p>

      {/* Step 2 Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Button
          onClick={() => setStep(2)}
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-xl rounded-lg shadow-xl cursor-pointer"
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
