import { useState } from "react";
import { Lock } from "lucide-react";
import logo from "../assets/icon/i-vault-logo.svg";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-sm h-screen bg-black flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-center py-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg">
              <img src={logo} alt="" />
            </div>
            <span className="text-white text-2xl font-semibold">I-Vault</span>
          </div>
        </div>

        {/* Reset Password Form */}
        <div className="flex-1 flex flex-col justify-center px-6">
          <h1 className="text-2xl font-bold text-center text-white mb-8">
            Reset Password
          </h1>
          <form className="space-y-5">
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold hover:opacity-95 transition"
            >
              Reset Password
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="h-14 border-t border-gray-800 flex items-center justify-center text-gray-500 text-sm">
          © 2025 I-Vault
        </div>
      </div>
    </div>
  );
}
