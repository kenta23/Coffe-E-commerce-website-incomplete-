import React from "react";


export default function Navbar() {
    function Toggle() {
        const navMenu = document.querySelector('.nav-menu')
        const Navbar = document.querySelector('.nav-links')
     
        navMenu.addEventListener('click', () => {
           navMenu.classList.toggle('active')
           Navbar.classList.toggle('active')
       })
     } 
     
     return (
      
      <nav className="Nav">
        <div className="nav-container">
            <div className="logo-text">
                <p className="logo">coffeedrill</p>
            </div>

 
            <div className="nav-links">
                <ul>
                    <li className="links">
                       <Link to='/'>Home</Link>
                    </li>

                    <li className="links">
                      About
                      </li>
                          
                    <li className="links">
                      <Link to='/products'>Products</Link>
                    </li>

                    <li className="links">Stores</li>
                </ul>
            </div>
            <Outlet />

        </div>
         <div className="nav-menu" onClick={Toggle}>
                <span className="menu"></span>
                <span className="menu"></span>
                <span className="menu"></span>
         </div>
      </nav>
    )
}