import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [passLength, setLength] = useState(9)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const copyBtn = document.getElementById("copyBtn");
  let isClicked = false;

  copyBtn.addEventListener('click', () => {
    if(!isClicked) {
      copyBtn.style.backgroundColor = 'green';
      isClicked = true;
    }
  });

  // copyBtn.addEventListener('click', () => {
  //   if (!isClicked) {
  //     copyBtn.style.backgroundColor = 'green'; // Change color to green on first click
  //     isClicked = true;
  //   } else {
  //     // Handle subsequent clicks (e.g., reset color)
  //     copyBtn.style.backgroundColor = 'blue'; // Reset color to blue
  //     isClicked = false;
  //   }
  // });
  const passwordRef = useRef(null);

  const generatePass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()-+=";

    for (let i=1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
      
    }

    setPassword(pass);

  }, [passLength, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);

  }, [password])
  
  // useEffect(() => {generatePass()},[generatePass])  // Working in both the codes
  
  useEffect(() => {generatePass()},[passLength, numberAllowed, charAllowed, generatePass]);

  return (
    <>
      <div className='mainWrapper'>
          <div>
            <h1>Password Generator</h1>
          </div>
          <div>
            <input type="text" value={password} placeholder='password' readOnly ref={passwordRef} />
            <button onClick={copyPassword} id='copyBtn'>Copy</button>
          </div>
          <div>
            <span>
              <input type="range" min={"6"} max={"100"} value={passLength} onChange={(e) => {setLength(e.target.value)}} />
              <label> Length: {passLength}</label>
            </span>
            <span>
              <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}} />
              <label htmlFor="numberInput"> Numbers</label>
            </span>
            <span>
              <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}} />
              <label htmlFor="charInput"> Charactors</label>
            </span>
          </div>
      </div>
    </>
  )
}

export default App
