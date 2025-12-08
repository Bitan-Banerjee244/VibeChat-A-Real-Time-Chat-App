import LeftStatic from "@/components/LeftStaticAuth";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen bg-gray-900 p-3 gap-2 ">
      {/* // Left Static Section   */}
      <div className="flex-1 w-1/2 hidden md:block">
        <LeftStatic />
      </div>

      {/* Right Dynamic Section */}
      <div className="flex-1 w-full lg:w-1/2 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
