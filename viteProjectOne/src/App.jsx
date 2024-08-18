
function App() {

  return (
    <>
      <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-9">
        <div className="text-2xl text-indigo-700 font-bold">Logo Here</div>
        <ul className="md:flex font-semibold hidden">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us </li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 rounded font-bold cursor-pointer">Login/SignUp</div>
        <div>
          <a href="#" className="font-bold text-4xl">&#8801;</a>
        </div>
      </nav>
    </>
  )
}

export default App
