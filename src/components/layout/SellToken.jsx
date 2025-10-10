import { InfoIcon } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { ArrowUpCircle } from "lucide-react";
import { useState } from "react";

export default function P2PSell() {
  const [listedSells, setListedSells] = useState([]);
  const [listDetails, setListDetails] = useState({
    token: "ICN",
    quantity: 0,
    rate: 0,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setListDetails((prev) => ({ ...prev, [name]: value }));
  };

  const submitListedSells = (e) => {
    e.preventDefault();
    const { quantity, rate } = listDetails;
    if (quantity <= 500) {
      return;
    }
    if (rate <= 0) return;
    setListedSells((prev) => [...prev, listDetails]);
  };

  return (
    <main>
      <p className="italic text-green-400">
        <b>Note:</b> Listed Tokens will auto-reverse After 2 days
      </p>
      <br />
      <section className="pb-33">
        {listedSells.length === 0 ? (
          <section className="flex items-center justify-center text-center w-full mt-10">
            <InfoIcon className="w-20 h-20 text-green-600" />
            <p className="">You have not listed any token for sale</p>
          </section>
        ) : (
          <div className="grid space-y-3 md:grid-cols-2 md:gap-3 xl:grid-cols-3">
            {listedSells.map((t, i) => (
              <div
                key={i}
                className="flex flex-row w-full justify-between rounded-xl p-3 h-fit bg-gray-900 text-gray-300"
              >
                <h1 className="font-bold">{t.token}</h1>
                <h1 className="">
                  Rate: <span className="font-semibold">${t.rate}</span>
                </h1>
                <h1>
                  Quantity: <span className="font-semibold">{t.quantity}</span>
                </h1>
              </div>
            ))}
          </div>
        )}
      </section>

      <form className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 p-3 space-y-3 md:sticky md:w-[60%] md:mx-auto md:mt-10 md:rounded-2xl md:border md:p-6 lg:w-[45%] xl:w-[35%]">
        <div className="flex gap-2 md:flex-col lg:flex-row md:gap-3">
          <Input
            type="number"
            name="quantity"
            value={listDetails.quantity}
            onChange={(e) => handleChangeInput(e)}
            placeholder="Quantity"
            className="w-1/2 md:w-full p-3 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Input
            type="number"
            name="rate"
            value={listDetails.rate}
            onChange={(e) => handleChangeInput(e)}
            placeholder="Rate (USD)"
            className="w-1/2 md:w-full p-3 rounded-xl bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <Button
          type="submit"
          onClick={(e) => submitListedSells(e)}
          className="flex items-center justify-center gap-2 w-full bg-red-600 text-black font-semibold p-3 rounded-xl hover:bg-red-500 transition"
        >
          <ArrowUpCircle className="w-5 h-5" />
          Sell Now
        </Button>
      </form>
    </main>
  );
}
