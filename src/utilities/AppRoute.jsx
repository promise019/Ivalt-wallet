import { BrowserRouter, Route, Routes } from "react-router";
import AuthPage from "../pages/Registration";
import ResetPasswordPage from "../pages/resetPassword";
import EmailConfirmationPage from "../pages/emailConfirmation";
import MainApplication from "../components/layout/MainApplication";
import Home from "../pages/Home";
import Earn from "../pages/Earn";
import Notification from "../pages/Notification";
import Settings from "../pages/settings";
import History from "../pages/TransactionHistory";
import SendCrypto from "../pages/SendToken";
import ReceiveToken from "../pages/ReceiveToken";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/confirm-email" element={<EmailConfirmationPage />} />
        <Route path="/ivault" element={<MainApplication />}>
          <Route path="home" element={<Home />} />
          <Route path="earn" element={<Earn />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
          <Route path="history" element={<History />} />
          <Route path="send" element={<SendCrypto />} />
          <Route path="receive" element={<ReceiveToken/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
