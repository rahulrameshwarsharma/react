import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  if(count >= 21) {
    // alert("cannot increase more");
    return (setCount((count) => count - 1));
  }
  if(count <= -1) {
    // alert("Counter cannot go negative");
    return (setCount((count) => count + 1));
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button id='increaseCount' className='btnStyle' onClick={() => setCount((count) => count + 1)}>
          Increase Count
        </button>
        <button className='btnStyle' onClick={() => setCount((count) => count - 1)}>
          Decrease count
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
