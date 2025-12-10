import React, { useState } from "react";
import { Mail } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

const EmailVerify: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email.trim()) {
      alert("Please enter your email!");
      return;
    }
    console.log({ email });
    alert("Verification email sent!");
  };

  return (
    <div className=" h-[40%] md:h-full w-full flex items-center justify-center bg-linear-to-br from-[#010111] via-[#1a0f3c] to-[#020217] p-4 rounded-md">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h1 className="text-3xl text-white font-bold text-center mb-4">
          Verify Your Email
        </h1>

        <div>
          <label className="flex items-center gap-2  text-gray-300 mb-2">
            Email
          </label>
          <InputGroup>
            <InputGroupInput
              placeholder="example@email.com"
              className="text-white w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroupAddon>
              <Mail className="w-5 h-5" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <Button
          onClick={handleSend}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 text-lg rounded-lg mt-4 cursor-pointer"
        >
          Send Verification
        </Button>
      </div>
    </div>
  );
};

export default EmailVerify;
