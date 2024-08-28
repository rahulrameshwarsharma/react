import React, { useId } from 'react';
import "../styles/style.css";

function InputBox({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = "usd", amountDisable = false, currencyDisable = false, className = "",}) {
  const amountInputId = useId();
  return (
    <div className= "wrapper">
        <div>
          <label htmlFor={amountInputId}>{label}</label>
          <input id={amountInputId} type="number" placeholder="Amount" disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>
        <div>
          <p>Currency Type</p>
          <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
              {currencyOptions.map((currency) => (<option key={currency} value={currency}>{currency}</option>))}
          </select>
        </div>
    </div>
  )
}

export default InputBox;
