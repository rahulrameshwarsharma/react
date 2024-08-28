import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

import './App.css';
import './styles/style.css';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  if(amount < 0){
    alert("Amount cannot be negative");
  }

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <h1>Currency Converter</h1>

      <div className="mainWrapper">
        <div className="formWrapper">
              <form onSubmit={(e) => {e.preventDefault(); convert(); }}>
                  <div>
                    <InputBox label="From " amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setAmount(amount)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} />
                  </div>

                  <div>
                    <button type="button" onClick={swap}>swap ↑↓</button>
                  </div>
                  
                  <div>
                    <InputBox label="To " amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} amountDisable />
                  </div>
                  <div>
                    <button type="submit">Convert {from.toUpperCase()} to {to.toUpperCase}</button>
                  </div>
              </form>
          </div>
      </div>
    </>
  )
}

export default App
