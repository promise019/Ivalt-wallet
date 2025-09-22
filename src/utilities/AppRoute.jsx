import { BrowserRouter, Route, Routes } from "react-router";
import AuthPage from "../pages/Registration";
import ResetPasswordPage from "../pages/resetPassword";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}
