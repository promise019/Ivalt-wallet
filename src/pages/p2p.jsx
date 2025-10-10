import NavigationBar from "../components/layout/NavigationBar";
import P2PBuy from "../components/layout/Buy(P2P)Token";
import P2PSell from "../components/layout/SellToken";
import Header from "../components/layout/Header";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import Button from "../components/ui/Button";

export default function P2P() {
  const navigate = useNavigate();
  const [page, setPage] = useState("buy");
  return (
    <>
      <main className="relative text-white h-screen bg-black px-2 pb-0.5 overflow-y-auto w-full">
        <Header className="sticky w-full h-fit top-0 pt-5 pb-5 bg-black z-5">
          <ChevronLeft
            className="inline-block -mt-2 hover:bg-gray-600 hover:rounded-full p-1 h-8 w-8"
            onClick={() => navigate("/ivault/home")}
          />
          <h1 className="text-2xl font-bold inline ml-3">P2P</h1>
          <nav className="rounded-xl p-0.5 flex w-fit space-x-2 bg-gray-700 border float-right -mt-1.5 mr-2">
            <Button
              onClick={() => setPage("buy")}
              className={`p-1.5 font-bold rounded-xl ${
                page === "buy" ? "bg-gray-500" : ""
              }`}
            >
              Buy
            </Button>
            <Button
              onClick={() => setPage("sell")}
              className={`p-1.5 font-bold rounded-xl ${
                page === "sell" ? "bg-gray-500" : ""
              }`}
            >
              Sell
            </Button>
          </nav>
          {/* filter */}
          <select className="bg-gray-800 text-white p-2 rounded-xl mt-4 focus:outline-none w-full block md:w-auto md:absolute top-0.5 left-27">
            <option>All Tokens</option>
            <option>ICN</option>
          </select>
        </Header>
        <section>
          {page === "buy" && <P2PBuy />}
          {page === "sell" && <P2PSell />}
        </section>
      </main>
      {/* <NavigationBar className={"hidden md:block md:sticky"} /> */}
    </>
  );
}
