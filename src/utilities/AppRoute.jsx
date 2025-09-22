import { BrowserRouter, Route, Routes } from "react-router";
import AuthPage from "../pages/Registration";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
