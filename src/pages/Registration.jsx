import { useState } from "react";
import { User, Lock, Mail } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Logo from "../components/ui/logo";
import { useNavigate } from "react-router";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const authSubmit = (e) => {
    e.preventDefault();
    // if (isLogin) {
    navigate("/ivault/home");
    // }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Mobile App-like Container */}
      <div className="w-full max-w-sm h-screen bg-black flex flex-col">
        {/* Top Bar like Mobile App */}
        <div className="flex items-center justify-center py-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            {/* Custom Logo */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg">
              <Logo />
            </div>
            <span className="text-white text-2xl font-semibold">I-Vault</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-6">
          <h1 className="text-2xl font-bold text-center text-white mb-8">
            {isLogin ? "Log In" : "Sign Up"}
          </h1>

          <form className="space-y-5">
            {!isLogin && (
              // extra fields for signup
              <div className="relative">
                <User
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />

                <Input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />

              <Input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <Button
              onClick={(e) => authSubmit(e)}
              type="button"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold hover:opacity-95 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>

          {isLogin && (
            <div className="text-right mt-2">
              <Button className="text-sm text-green-400 hover:underline">
                Forgot password?
              </Button>
            </div>
          )}

          <p className="text-center text-gray-400 mt-6 text-sm">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <Button
              className="text-green-400 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Login"}
            </Button>
          </p>
        </div>

        {/* Bottom Nav Placeholder for PWA feel */}
        <div className="h-14 border-t border-gray-800 flex items-center justify-center text-gray-500 text-sm">
          © 2025 I-Vault
        </div>
      </div>
    </div>
  );
}
