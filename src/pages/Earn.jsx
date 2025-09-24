import { Coins, Link, Gift } from "lucide-react";

export default function Earn() {
  return (
    <main className="text-white max-w-full md:ml-[17%] lg:ml-[14%] xl:ml-[12%] bg-black px-4 pt-4 pb-22">
      <h1 className="text-2xl font-bold mb-6 sticky top-4">Earn</h1>
      <section className="overflow-y-auto">
        {/* Google Ads Section */}
        <div className="bg-gray-800 rounded-2xl mb-6 p-4 flex items-center justify-center h-24 md:h-32 lg:h-40 w-full">
          <span className="text-gray-400 text-sm">Google Ads Placeholder</span>
        </div>

        {/* ICN Miner */}
        <div className="bg-gray-900 p-6 rounded-2xl mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Coins className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-white font-semibold">ICN Miner</p>
              <p className="text-gray-400 text-sm">
                Start mining ICN tokens easily
              </p>
            </div>
          </div>
          <a
            href="#"
            className="bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold px-6 py-2 rounded-xl"
          >
            Open Miner
          </a>
        </div>

        {/* Referral Program */}
        <div className="bg-gray-900 p-6 rounded-2xl mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Gift className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-white font-semibold">Referral Rewards</p>
              <p className="text-gray-400 text-sm">
                Invite friends and earn ICN bonuses
              </p>
            </div>
          </div>
          <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl">
            Invite Now
          </button>
        </div>

        {/* Learn & Earn */}
        <div className="bg-gray-900 p-6 rounded-2xl mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-white font-semibold">Learn & Earn</p>
              <p className="text-gray-400 text-sm">
                Complete lessons and earn free tokens
              </p>
            </div>
          </div>
          <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl">
            Start Learning
          </button>
        </div>

        {/* Custom Ads Section */}
        <div className="bg-gray-800 rounded-2xl mt-6 p-4 flex items-center justify-center h-24 md:h-32 lg:h-40 w-full">
          <span className="text-gray-400 text-sm">Custom Ads Placeholder</span>
        </div>
      </section>
    </main>
  );
}
