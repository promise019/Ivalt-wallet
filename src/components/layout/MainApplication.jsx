import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";

export default function MainApplication() {
  return (
    <main className="min-h-screen max-h-fit w-screen bg-black">
      <NavigationBar />
      <Outlet />
    </main>
  );
}
