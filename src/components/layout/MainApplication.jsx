import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";

export default function MainApplication() {
  return (
    <main className="h-screen w-screen bg-black">
      <NavigationBar />
      <Outlet />
    </main>
  );
}
