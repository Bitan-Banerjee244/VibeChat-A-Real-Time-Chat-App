import { useState } from "react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { KeyRound } from "lucide-react";
import { Button } from "../components/ui/button";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <div
      id="changePassword"
      className="w-full  h-[55%] lg:h-full text-white flex justify-center items-center
            bg-linear-to-b from-[#011227] via-[#170335] to-[#0a001a68] p-6 rounded-2xl shadow-violet-950 shadow-sm"
    >
      {/* Inner form container */}
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-white/90 text-center">
          Change Password
        </h2>

        {/* New Password */}
        <InputGroup className="w-full h-[50px]">
          <InputGroupInput
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <InputGroupAddon>
            <KeyRound />
          </InputGroupAddon>
        </InputGroup>

        {/* Confirm Password */}
        <InputGroup className="w-full h-[50px]">
          <InputGroupInput
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <InputGroupAddon>
            <KeyRound />
          </InputGroupAddon>
        </InputGroup>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full h-[50px] bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl py-3 transition-colors"
        >
          Update Password
        </Button>
      </div>
    </div>
  );
}

export default ChangePassword;
