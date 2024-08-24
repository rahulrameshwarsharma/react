import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
        <div style={{background: color}} className="color1">
          <div>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("olive")}>Olive</button>
            <button onClick={() => setColor("orangered")}>Orangered</button>
            <button onClick={() => setColor("yellow")}>Yellow</button>
            <button onClick={() => setColor("white")}>White</button>
          </div>
        </div>
    </>
  )
}

export default App
