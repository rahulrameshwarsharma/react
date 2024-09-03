import { useState } from 'react';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';


import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Router</h1>
      <Header />
    </>
  )
}

export default App
