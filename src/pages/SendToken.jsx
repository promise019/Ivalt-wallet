import { ArrowUpRight, Wallet, Send, Coins, ScanLineIcon } from "lucide-react";
import Header from "../components/layout/Header";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import QRScanner from "../components/QRScanner";
import { useState } from "react";

export default function SendCrypto() {
  const [showScanner, setShowScanner] = useState(false);
  return (
    <main className="text-white h-screen bg-black px-4 pb-20 overflow-y-auto max-w-full md:px-15 md:ml-[17%] lg:px-9 lg:ml-[14%] xl:ml-[12%] md:max-w-[83%] lg:max-w-[86%] xl:max-w-[88%] overflow-x-hidden">
      <Header className="sticky w-full h-fit top-0 py-5 z-3 bg-black">
        <h1 className="text-2xl font-bold">Transfer Token</h1>
      </Header>

      {/* Wallet Info */}
      <div className="bg-gray-900 p-5 rounded-2xl mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wallet className="w-8 h-8 text-green-400" />
          <div>
            <p className="text-gray-400 text-sm">Available Balance</p>
            <p className="text-white text-lg font-semibold">$2,430.50</p>
          </div>
        </div>
        <Coins className="w-8 h-8 text-gray-600" />
      </div>

      {/* Send Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-gray-400 mb-2">
            Recipient Wallet Address
          </label>
          <div className="w-full flex space-x-2">
            <Input
              type="text"
              placeholder="Enter wallet address"
              className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <ScanLineIcon
              className="w-11.5 h-11.5 bg-gray-800 p-1 rounded-lg"
              onClick={() => setShowScanner()}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Select Token</label>
          <select className="w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>ICN</option>
            <option>BTC</option>
            <option>ETH</option>
            <option>USDT</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Amount</label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <p className="text-gray-500 text-sm mt-1">Network fee: ~0.001 ICN</p>
        </div>

        <Button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
        >
          <Send className="w-5 h-5" />
          Send Now
        </Button>
      </form>

      {showScanner && <QRScanner />}

      {/* Recent Recipients */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">Recent Recipients</h2>
        <div className="space-y-3">
          {[
            { address: "0xAbC123...E9D45", amount: "0.5 ICN" },
            { address: "0x45Df9...A8C23", amount: "1.2 BTC" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 rounded-xl flex items-center justify-between hover:bg-gray-800 cursor-pointer"
            >
              <div>
                <p className="text-white font-medium">{item.address}</p>
                <p className="text-gray-500 text-sm">{item.amount}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-green-400" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
