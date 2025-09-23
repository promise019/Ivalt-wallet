import { Mail } from "lucide-react";
import Logo from "../components/ui/logo";
import Button from "../components/ui/Button";

export default function EmailConfirmationPage() {
  // use toast or custom notification to notfy success or error
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-sm h-screen bg-black flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-center py-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg">
              <Logo />
            </div>
            <span className="text-white text-2xl font-semibold">I-Vault</span>
          </div>
        </div>

        {/* Email Confirmation Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-green-500/10">
            <Mail size={36} className="text-green-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Check your email
          </h1>
          <p className="text-gray-400 mb-8 text-sm">
            We’ve sent a confirmation link to your email. Please click the link
            to verify your account.
          </p>
          <Button
            type="button"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold hover:opacity-95 transition"
          >
            Resend Email
          </Button>
        </div>

        {/* Footer */}
        <div className="h-14 border-t border-gray-800 flex items-center justify-center text-gray-500 text-sm">
          © 2025 I-Vault
        </div>
      </div>
    </div>
  );
}
