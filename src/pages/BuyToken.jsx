import Header from "../components/layout/Header";
import Input from "../components/ui/Input";
import { useState } from "react";
import { ArrowDownCircle, ShieldCheck } from "lucide-react";
import Button from "../components/ui/Button";

export default function BuyToken() {
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState(0.0005);

  const total = (quantity * rate).toFixed(2);

  return (
    <main className="h-screen text-white max-w-full overflow-y-auto md:ml-[20%] lg:ml-[14%] xl:ml-[12%] bg-black px-4 pb-22">
      <Header
        className={"sticky w-full px-1 h-fit top-0 py-4 mb-1 z-3 bg-black"}
      >
        <h1 className="text-2xl font-bold">Purchase</h1>
      </Header>
      {/* Token Selection */}
      <div className="mt-4">
        <label className="block text-gray-400 mb-1">Select Token</label>
        <select className="bg-gray-900 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-auto">
          <option>Select Token</option>
          <option>ICN</option>
        </select>
      </div>

      {/* Purchase Details */}
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="quantity" className="block text-gray-400 mb-1">
            Quantity
          </label>
          <Input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value < 1 ? 1 : e.target.value))
            }
            placeholder="Enter quantity..."
            className="w-full p-3 bg-gray-900 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="rate" className="block text-gray-400 mb-1">
            Rate (USD)
          </label>
          <Input
            id="rate"
            readOnly={true}
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            placeholder="Enter rate..."
            className="w-full p-3 bg-gray-900 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="bg-gray-900 p-4 rounded-2xl mt-4">
          <p className="text-gray-400 text-sm">Estimated Total</p>
          <p className="text-2xl font-bold text-green-400">
            ${isNaN(total) ? "0.00" : total}
          </p>
        </div>
      </div>

      {/* Payment Method */}
      {/* <div className="mt-8">
        <label className="block text-gray-400 mb-1">Payment Method</label>
        <select className="bg-gray-900 text-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 w-full">
          <option>Bank Transfer</option>
          <option>Credit/Debit Card</option>
          <option>Crypto Wallet</option>
        </select>
      </div> */}

      {/* Buy Button */}
      <Button className="flex items-center justify-center gap-2 w-full mt-8 bg-green-500 text-black font-semibold px-5 py-3 rounded-xl hover:bg-green-400 transition">
        <ArrowDownCircle className="w-5 h-5" />
        Confirm Purchase
      </Button>

      {/* Security Info */}
      <div className="bg-gray-900 p-5 rounded-2xl mt-8 flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-green-400 mt-1" />
        <p className="text-gray-400 text-sm">
          All transactions are protected by I-Vault’s secure infrastructure.
          Always double-check your token and payment details before confirming.
        </p>
      </div>
    </main>
  );
}
