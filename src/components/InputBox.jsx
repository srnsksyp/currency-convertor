import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-slate-100 p-4 rounded-xl shadow-inner text-sm flex flex-col gap-3 ${className}`}
    >
      <div>
        <label
          htmlFor={amountInputId}
          className="block text-gray-600 mb-1 font-medium"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-600 mb-1 font-medium">
          Currency Type
        </label>
        <select
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
