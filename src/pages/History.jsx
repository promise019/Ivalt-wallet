import { Bell, Mail, ShieldCheck, Gift } from "lucide-react";

export default function History() {
  const notifications = [
    {
      icon: <Bell className="w-5 h-5 text-green-400" />,
      title: "New login detected",
      message: "We noticed a login from a new device.",
      time: "2m ago",
    },
    {
      icon: <Mail className="w-5 h-5 text-green-400" />,
      title: "Email verified",
      message: "Your email address has been successfully verified.",
      time: "1h ago",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
      title: "Security update",
      message: "Your password was changed recently.",
      time: "3h ago",
    },
    {
      icon: <Gift className="w-5 h-5 text-green-400" />,
      title: "Promo reward",
      message: "You received 5 ICN tokens as a bonus.",
      time: "1d ago",
    },
  ];
  return (
    <main className="text-white max-w-full md:ml-[17%] lg:ml-[14%] xl:ml-[12%] overflow-y-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>

      <div className="space-y-3 overflow-y-auto">
        {notifications.map((note, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-xl flex items-start gap-3 hover:bg-gray-800"
          >
            <div className="mt-1">{note.icon}</div>
            <div className="flex-1">
              <p className="text-white font-semibold">{note.title}</p>
              <p className="text-gray-400 text-sm">{note.message}</p>
            </div>
            <span className="text-gray-500 text-xs whitespace-nowrap">
              {note.time}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
