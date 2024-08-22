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
        <img className="w-full hidden md:block" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
        <img className="w-full md:hidden" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" srcSet="" />
      </header>

      {/* Our student section */}

      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-900 font-bold text-3xl md:text-4xl text-center">{`"Pure Hardwork, No Shortcuts!"`}</p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly">
        <div className="w-46 flex flex-col items-center mb-12">
          <img className="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="text-3xl font-bold text-white">600+</p>
          <p className="text-3xl font-bold text-gray-500">Different Courses</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="text-3xl font-bold text-white">700000+</p>
          <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="text-3xl font-bold text-white">10000+</p>
          <p className="text-3xl font-bold text-gray-500">Successfull Transition</p>
        </div>
      </div>
      </div>

      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-900 font-bold text-3xl md:text-4xl text-center">{`"Our Products"`}</p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly">
        <div className="w-46 flex flex-col items-center mb-12">
          <img className="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="text-3xl font-bold text-white">600+</p>
          <p className="text-3xl font-bold text-gray-500">Different Courses</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="text-3xl font-bold text-white">700000+</p>
          <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="text-3xl font-bold text-white">700000+</p>
          <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
        <img className="w-44 h-44" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="text-3xl font-bold text-white">10000+</p>
          <p className="text-3xl font-bold text-gray-500">Successfull Transition</p>
        </div>
      </div>
      </div>

      <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div>
        <img className="w-32 h-32" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
          <p className="my-4">Email Us: support@domain.commm</p>
          <img className="w-32 h-32" src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="" />
        </div>
        
        <div>
          <div>
            <h2 className="font-bold text-xl mt-4">Name Skills</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-xl mt-4">Products</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <p>Skills Labs</p>
            <p>Job Portal </p>
            <p>Experience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="font-bold text-xl mt-4">Links</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <p>Discord Channel</p>
            <p>YouTube </p>
            <p>Careers</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
