import { Shield } from "lucide-react";
import Header from "./Header";
import Button from "../ui/Button";

export default function P2PBuy() {
  return (
    <main className="relative text-white h-screen bg-black px-4 pb-2 overflow-y-auto w-full md:px-7 ">
      <Header>
        {/*Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4"></div>
      </Header>

      {/* Active Buy Offers */}
      <div className="space-y-4">
        {[1, 2, 3].map((offer) => (
          <div
            key={offer}
            className="bg-gray-900 p-5 rounded-2xl flex flex-row justify-between items-start md:items-center hover:bg-gray-800 transition"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-0">
              <div>
                <p className="font-semibold text-white">Trader #{offer}</p>
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
              <Button className="flex items-center justify-center gap-2 bg-green-500 text-black px-4 py-2 rounded-xl font-semibold hover:opacity-90">
                Buy Now
              </Button>
              {/* <Button className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-700">
                <MessageCircle className="w-4 h-4 text-green-400" /> Chat
              </Button> */}
            </div>
          </div>
        ))}
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
