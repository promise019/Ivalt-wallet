import NavigationBar from "../components/layout/NavigationBar";
import P2PBuy from "../components/layout/Buy(P2P)Token";
import P2PSell from "../components/layout/SellToken";
import Header from "../components/layout/Header";
import { ChevronLeft } from "lucide-react";

export default function P2P() {
  return (
    <>
      <main className="relative text-white h-screen bg-black px-2 pb-2 overflow-y-auto w-full">
        <Header className="sticky w-full h-fit top-0 pt-5 z-3 bg-black">
          <ChevronLeft className="inline-block -mt-2" />
          <h1 className="text-2xl font-bold inline ml-3 md:ml-0">P2P</h1>
        </Header>
      </main>
      {/* <NavigationBar className={"hidden md:block md:sticky"} /> */}
    </>
  );
}
