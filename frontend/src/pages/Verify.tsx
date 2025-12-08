import { useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function Verify() {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value: string) => {
    setOtp(value);
    // console.log("Current OTP:", value);
  };

  const handleVerify = () => {
    // console.log("Verifying OTP:", otp);
    // Add your verification logic here
  };

  return (
    <div
      id="otp-verification"
      className="w-full   h-[50%] lg:h-full text-white flex justify-center items-center
            bg-linear-to-b from-[#011227] via-[#170335]  to-[#0a001a68] p-6 rounded-2xl shadow-violet-950 shadow-sm"
    >
      {/* Inner Card */}
      <div className="w-full flex flex-col items-center gap-9">
        <p className="text-center text-lg lg:text-xl text-white/80">
          Enter the OTP sent to your email
        </p>

        {/* OTP Boxes */}
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          value={otp}
          onChange={handleOtpChange}
        >
          <InputOTPGroup className="flex gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="w-10 h-10 lg:w-16 lg:h-16 text-center text-lg lg:text-2xl 
                  bg-[#0a001a] border border-violet-500 
                  focus:border-violet-400 focus:ring-2 focus:ring-violet-300 focus:outline-none transition-all"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-[90%] py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default Verify;
