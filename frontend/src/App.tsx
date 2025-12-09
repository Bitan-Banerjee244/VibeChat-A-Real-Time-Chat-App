import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import ChangePassword from "./pages/ChangePassword";
import ChatPage from "./pages/ChatPage";
import CreateProfile from "./pages/CreateProfile";

function App() {
  return (
  
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Signin />} /> {/* /auth */}
          <Route path="login" element={<Login />} /> {/* /auth/login */}
          <Route path="otp" element={<Verify />} /> {/* /auth/otp */}
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="profile" element={<CreateProfile />} />
          {/* /auth/change-password */}
        </Route>

        {/* Chat Route */}
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
  );
}

export default App;
