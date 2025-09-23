import {
  History,
  LogOut,
  Settings,
  ActivitySquare,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router";
import Logo from "../ui/logo";

export default function NavigationBar() {
  return (
    <nav className="fixed bottom-0 w-screen h-fit bg-black flex justify-between pb-6 pt-2 px-9 border-t border-gray-900 md:grid md:top-0 md:left-0 md:space-y-9 md:bg-yellow-50 md:w-fit md:p-3">
      <Logo className={"hidden md:block w-11"} />
      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } relative  text-green-400 rounded-full p-1.5`
        }
      >
        <Wallet className="text-white" size={30} />
        <h1 className="font-medium -ml-2 -bottom-6 absolute">Wallet</h1>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } relative  text-green-400 rounded-full p-1.5`
        }
      >
        <ActivitySquare className="text-white" size={30} />
        <h1 className="font-medium -ml-1 -bottom-6 absolute">Earn</h1>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } relative  text-green-400 rounded-full p-1.5`
        }
      >
        <History className="text-white" size={30} />
        <h1 className="font-medium -ml-3 -bottom-6 absolute">History</h1>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `fixed top-2.5 right-2.5 ${
            isActive ? "bg-gradient-to-r from-green-400 to-emerald-600" : ""
          } rounded-full p-1 md:static`
        }
      >
        <Settings className="text-white" size={35} />
        <h1 className="font-medium hidden md:inline-block text-white">Wallet</h1>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `relative text-green-500 bg-amber-100 rounded-full p-1 hidden md:block`
        }
      >
        <LogOut className="text-white" size={35} />
        <h1 className="font-medium -ml-2 absolute">Wallet</h1>
      </NavLink>
    </nav>
  );
}
