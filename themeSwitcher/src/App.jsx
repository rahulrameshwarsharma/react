import './App.css'
import '../src/styles/styles.css';
import { ThemeProvider } from './contexts/Theme';
import { useEffect, useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {setThemeMode("light")};
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='mainWrapper'>
        <span>Theme Switcher</span>
        <div>{<ThemeBtn />}</div>
        <div>{<Card />}</div>
      </div>
    </ThemeProvider>
  )
}

export default App
