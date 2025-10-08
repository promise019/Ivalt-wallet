import {
  LogOut,
  Settings,
  ActivitySquare,
  Wallet,
  Headset,
  Bell,
} from "lucide-react";
import { NavLink } from "react-router";
import Logo from "../ui/logo";

export default function NavigationBar() {
  return (
    <nav
      className={`fixed bottom-0 w-screen h-fit bg-black flex justify-between pb-6 z-7 pt-2 px-6 border-t border-gray-900
     md:block md:h-screen md:top-0 md:left-0 md:space-y-4 md:bg-black md:w-[20%] md:p-2 md:border-r lg:w-[14%] xl:w-[12%]`}
    >
      <Logo className={"hidden md:inline-block w-11"} />{" "}
      <span className="hidden text-white md:inline-block font-bold text-lg">
        I-Vault
      </span>
      <NavLink
        to="home"
        className={({ isActive }) =>
          `${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } relative  text-green-400 rounded-full p-1.5 md:static md:rounded-lg md:flex md:h-fit md:space-x-4`
        }
      >
        <Wallet className="text-white" size={30} />
        <h1 className="font-medium -ml-2 -bottom-6 absolute md:static md:text-white md:mt-1">
          Wallet
        </h1>
      </NavLink>
      <NavLink
        to="earn"
        className={({ isActive }) =>
          `${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } relative  text-green-400 rounded-full p-1.5 md:static md:rounded-lg md:flex md:h-fit md:space-x-3`
        }
      >
        <ActivitySquare className="text-white" size={30} />
        <h1 className="font-medium -ml-1 -bottom-6 absolute md:static md:text-white md:mt-1">
          Earn
        </h1>
      </NavLink>
      <NavLink
        to="notification"
        className={({ isActive }) =>
          `${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } relative  text-green-400 rounded-full p-1.5 md:static md:rounded-lg md:flex md:h-fit md:space-x-10`
        }
      >
        <Bell className="text-white" size={30} />
        <h1 className="font-medium -ml-8 -bottom-6 absolute md:static md:text-white md:mt-1 md:text-sm">
          Notification
        </h1>
      </NavLink>
      <NavLink
        to="settings"
        className={({ isActive }) =>
          `fixed top-2.5 right-2.5 ${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } rounded-full p-1 md:static md:rounded-lg md:flex md:h-fit md:space-x-1`
        }
      >
        <Settings className="text-white" size={35} />
        <h1 className="font-medium hidden md:inline-block text-white md:mt-1">
          settings
        </h1>
      </NavLink>
      <NavLink
        to="support"
        className={({ isActive }) =>
          `${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } relative  text-green-400 rounded-full p-1.5 md:static md:rounded-lg md:flex md:h-fit md:space-x-6`
        }
      >
        <Headset className="text-white" size={30} />
        <h1 className="font-medium -ml-4 -bottom-6 absolute md:static md:text-white md:mt-1">
          Support
        </h1>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `relative ${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } text-green-500 bg-amber-100 rounded-full p-1 hidden
         md:static md:rounded-lg md:flex md:h-fit md:space-x-3`
        }
      >
        <LogOut className="text-red-700" size={35} />
        <h1 className="font-medium -ml-2 absolute md:static md:text-white md:mt-1">
          Logout
        </h1>
      </NavLink>
    </nav>
  );
}
