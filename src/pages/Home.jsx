import {
  Send,
  ArrowDownToLine,
  CreditCard,
  User,
  ShoppingCart,
  TrendingUp,
  Eye,
  EyeClosed,
} from "lucide-react";
import { useState } from "react";
import Header from "../components/layout/Header";

export default function Home() {
  const [showAmount, setShowAmount] = useState(true);
  return (
    <main className="relative text-white h-screen bg-black px-2 pt-1 overflow-y-auto max-w-full md:px-15 md:ml-[17%] lg:ml-[14%] xl:ml-[12%] md:max-w-[83%] lg:max-w-[86%] xl:max-w-[88%] overflow-x-hidden">
      {/* Header */}
      <Header className="sticky w-full px-1 left-0 h-fit top-0 py-5 mb-1 z-3 bg-black">
        <User className="w-6 h-6 text-green-400 inline-block" />
        <h1 className="text-lg font-bold mb-6 inline">Hi, Daniel</h1>
        {/*user info and actions field start*/}

        {/* User Info and Balance */}
        <div className="bg-gray-900 rounded-2xl p-5 mt-4 flex items-center justify-between lg:h-fit">
          <div className="space-x-3">
            <p className="text-gray-400 inline">Balance</p>
            {showAmount ? (
              <Eye
                className="inline-block w-5 h-4"
                onClick={() => setShowAmount(false)}
              />
            ) : (
              <EyeClosed
                className="inline-block w-5 h-4"
                onClick={() => setShowAmount(true)}
              />
            )}
            <p className="text-2xl font-semibold text-green-400 mt-1">
              {showAmount ? "$24,580.32" : "****"}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid p-1 grid-cols-4 gap-2 mt-4 md:gap-6 xl:absolute xl:right-7 top-15">
          <button className="bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold p-2 rounded-xl flex flex-col items-center">
            <Send className="w-6 h-6 mb-2" /> Send
          </button>
          <button className="bg-gray-800 text-white font-semibold p-2 rounded-xl flex flex-col items-center">
            <ArrowDownToLine className="w-6 h-6 mb-2" /> Receive
          </button>
          <button className="bg-gray-800 text-white font-semibold p-2 rounded-xl flex flex-col items-center">
            <ShoppingCart className="w-6 h-6 mb-2" /> Buy
          </button>
          <button className="bg-gray-800 text-white font-semibold p-2 rounded-xl flex flex-col items-center">
            <TrendingUp className="w-6 h-6 mb-2" /> Sell
          </button>
        </div>
      </Header>
      {/*user info and actions field ends*/}
      {/* Tokens List */}
      <div className="px-2 pb-23">
        <h2 className="text-lg font-semibold mb-3">Your Tokens</h2>
        <div className="space-y-3 lg:grid lg:grid-cols-2 gap-4">
          <div className="bg-gray-900 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">Bitcoin (BTC)</span>
            </div>
            <span className="text-white font-semibold">1.245 BTC</span>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">Ethereum (ETH)</span>
            </div>
            <span className="text-white font-semibold">10.50 ETH</span>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">iCoin (ICN)</span>
            </div>
            <span className="text-white font-semibold">500 ICN</span>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">Bitcoin (BTC)</span>
            </div>
            <span className="text-white font-semibold">1.245 BTC</span>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">Ethereum (ETH)</span>
            </div>
            <span className="text-white font-semibold">10.50 ETH</span>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">iCoin (ICN)</span>
            </div>
            <span className="text-white font-semibold">500 ICN</span>
          </div>
        </div>
      </div>
    </main>
  );
}
