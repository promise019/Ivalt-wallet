import {
  Search,
  Shield,
  User,
  Star,
  MessageCircle,
  Wallet,
  ChevronLeft,
} from "lucide-react";
import Header from "./Header";
import Button from "../ui/Button";

export default function P2PBuy() {
  return (
    <main className="relative text-white h-screen z-6 bg-black px-4 pb-2 overflow-y-auto max-w-full md:px-7 md:ml-[17%] lg:px-9 lg:ml-[14%] xl:ml-[12%] md:max-w-[83%] lg:max-w-[86%] xl:max-w-[88%] overflow-x-hidden">
      <Header >
        
        {/*Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <Button>Purchase</Button>
          <select className="bg-gray-800 text-white p-2 rounded-xl mb-3 focus:outline-none w-full md:w-auto">
            <option>All Tokens</option>
            <option>ICN</option>
            <option>BTC</option>
            <option>USDT</option>
          </select>
        </div>
      </Header>

      {/* Active Buy Offers */}
      <div className="space-y-4">
        {[1, 2, 3].map((offer) => (
          <div
            key={offer}
            className="bg-gray-900 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-800 transition"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-0">
              <User className="w-8 h-8 text-green-400" />
              <div>
                <p className="font-semibold text-white">Trader #{offer}</p>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-500 text-sm">
                  120+ trades | 99% success rate
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">Rate</p>
              <p className="text-white font-semibold">1 ICN = $0.82</p>
              <p className="text-gray-500 text-xs">Available: 340 ICN</p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
              <button className="flex items-center justify-center gap-2 bg-green-500 text-black px-4 py-2 rounded-xl font-semibold hover:opacity-90">
                Buy Now
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700">
                <MessageCircle className="w-4 h-4 text-green-400" /> Chat
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Wallet Link */}
      <div className="mt-8 text-center">
        <button className="flex items-center justify-center gap-2 mx-auto bg-green-600 text-black px-5 py-3 rounded-xl font-semibold hover:bg-green-500">
          <Wallet className="w-5 h-5" /> Go to My Wallet
        </button>
      </div>

      {/* Safety Notice */}
      <div className="bg-gray-900 p-5 rounded-2xl mt-8 flex items-start gap-3">
        <Shield className="w-6 h-6 text-green-400 mt-1" />
        <p className="text-gray-400 text-sm">
          All buy trades are protected by escrow. Ensure you complete payments
          through verified channels. Funds are automatically released once
          payment is confirmed by the seller.
        </p>
      </div>
    </main>
  );
}
