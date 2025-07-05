import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl border border-slate-300">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <div className="relative text-center">
            <button
              type="button"
              className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          <button
            type="submit"
            className="w-full text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Convert {from.toUpperCase()} ➔ {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
