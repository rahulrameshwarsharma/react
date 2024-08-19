
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

      <header className="w-full h-auto">
        <img className="w-full hidden md:block" src="https://images.pexels.com/photos/27582996/pexels-photo-27582996/free-photo-of-a-statue-of-arco-da-rua-augusto-in-lisbon.jpeg" alt="" srcSet="" />
        <img className="w-full md:hidden" src="https://images.pexels.com/photos/5031641/pexels-photo-5031641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
      </header>

      {/* Our student section */}

      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-900 font-bold text-3xl md:text-4xl text-center">{`"Pure Hardwork, No Shortcuts!"`}</p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      </div>
    </>
  )
}

export default App
