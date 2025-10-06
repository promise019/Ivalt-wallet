import {
  Bell,
  Shield,
  Palette,
  RefreshCw,
  HelpCircle,
  Trash2,
  Mail,
  Newspaper,
  LogOut,
  Coins,
} from "lucide-react";
import Header from "../components/layout/Header";

export default function Settings() {
  const settingsOptions = [
    { icon: <Coins className="w-5 h-5 text-green-400" />, label: "Tokens" },
    {
      icon: <Bell className="w-5 h-5 text-green-400" />,
      label: "Notification",
    },
    { icon: <Shield className="w-5 h-5 text-green-400" />, label: "Security" },
    { icon: <Palette className="w-5 h-5 text-green-400" />, label: "Theme" },
    { icon: <RefreshCw className="w-5 h-5 text-green-400" />, label: "Update" },
    { icon: <HelpCircle className="w-5 h-5 text-green-400" />, label: "FAQ" },
    {
      icon: <Trash2 className="w-5 h-5 text-red-500" />,
      label: "Delete Account",
    },
    { icon: <Mail className="w-5 h-5 text-green-400" />, label: "Contact Us" },
    {
      icon: <Newspaper className="w-5 h-5 text-green-400" />,
      label: "I-News",
    },
    { icon: <LogOut className="w-5 h-5 text-red-500" />, label: "Sign Out" },
  ];
  return (
    <main className="text-white max-w-full md:ml-[17%] lg:ml-[14%] xl:ml-[12%] bg-black px-4 pb-23 lg:px-20">
      <Header className="sticky w-full h-fit top-0 py-4 z-3 bg-black">
        <h1 className="text-2xl font-bold ">Settings</h1>
      </Header>
      <div className="space-y-3 md:grid grid-cols-3 gap-3">
        {settingsOptions.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-800"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-gray-300 font-medium">{item.label}</span>
            </div>
            <span className="text-gray-500">›</span>
          </div>
        ))}
      </div>
    </main>
  );
}