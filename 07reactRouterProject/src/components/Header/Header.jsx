import React from 'react';
import { Link, NavLink } from 'react-router-dom';



import "../Styles/Style.css";

function Header() {
  return (
    <div className="mainWrapper">
      <header>
        <nav>
            <div>
                <Link to="/"><img className="headerLogo" src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" /></Link>
            </div>
            <div>
              <li><NavLink className={({isActive}) => isActive ? `activeNavlink` : `inActiveNavlink`} to="">Home</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? `activeNavlink` : `inActiveNavlink`} to="/about">About</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? `activeNavlink` : `inActiveNavlink`} to="/contact">Contact</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? `activeNavlink` : `inActiveNavlink`} to="/social">Social</NavLink></li>
              {/* <li><NavLink className={({isActive}) => isActive ? `activeNavlink` : `inActiveNavlink`} to='/github/hiteshchoudhary'>Github</NavLink></li> */}
              <li><NavLink className={({isActive}) => isActive ? `activeNavlink` : `inActiveNavlink`} to='/github'>Github</NavLink></li>
            </div>
            <div>
                <li><Link to="#">Login</Link></li>
                <li><Link className="colorBtn" to="#">Get started</Link></li>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
