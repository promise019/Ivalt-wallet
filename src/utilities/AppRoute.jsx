import { BrowserRouter, Route, Routes } from "react-router";
import AuthPage from "../pages/Registration";
import ResetPasswordPage from "../pages/resetPassword";
import EmailConfirmationPage from "../pages/emailConfirmation";
import MainApplication from "../components/layout/MainApplication";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/confirm-email" element={<EmailConfirmationPage />} />
        <Route path="/ivault" element={<MainApplication />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
