import Header from "../components/layout/Header";
import QRCode from 'qrcode'
import { Copy } from "lucide-react";
import Button from "../components/ui/Button";
import { useEffect, useRef, useState } from "react";

export default function ReceiveToken() {
  const [address] = useState("0x07927372g2hwy44e32r557");
  const canvasRef = useRef(null);
  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, address, { width: 200 }, (err) => {
      if (err) console.error(err);
    });
  }, [address]);
  return (
    <main className="relative text-white h-screen bg-black px-4 pb-20 overflow-y-auto max-w-full md:px-15 md:ml-[17%] lg:px-9 lg:ml-[14%] xl:ml-[12%] md:max-w-[83%] lg:max-w-[86%] xl:max-w-[88%] overflow-x-hidden">
      <Header className="sticky w-full h-fit top-0 py-5 z-3 bg-black">
        <h1 className="text-2xl font-bold">Receive Token</h1>
      </Header>
      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Select Token</label>
        <select className="w-full p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>ICN</option>
          <option>BTC</option>
          <option>ETH</option>
          <option>USDT</option>
        </select>
      </div>

      {/* QR Code Section */}
      <div className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center justify-center mb-6">
        <div className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center">
          <canvas className="bg-transparent rounded-2xl" ref={canvasRef}></canvas>
          <p className="text-gray-400 text-sm mb-2">Your Wallet Address</p>
          <p className="text-white text-sm font-mono">0xAbC12345...E9D45</p>
        </div>
        <Button className="mt-4 flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700">
          <Copy className="w-5 h-5 text-green-400" />
          <span className="text-sm text-gray-300">Copy Address</span>
        </Button>
      </div>

      {/* Info Section */}
      <div className="bg-gray-900 p-5 rounded-2xl">
        <h2 className="text-lg font-semibold mb-2">Tips</h2>
        <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
          <li>Only send supported tokens to this address.</li>
          <li>Use the correct network to avoid loss of funds.</li>
          <li>Confirm address before sending large transactions.</li>
        </ul>
      </div>
    </main>
  );
}
