import React from "react";
import ProductsData from "./ProductsData";
import { Link, Outlet } from "react-router-dom";
import Section from "./Section";


function Toggle() {
   const navMenu = document.querySelector('.nav-menu')
   const Navbar = document.querySelector('.nav-links')

   navMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active')
      Navbar.classList.toggle('active')
  })
} 

const Nav = () => {
   return(
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

const Home = () => {
   return(
      <>
         <header className="hidden">
               <div className="main-content">
                <h1 className="title">Your Coffee Awaits</h1>
                    <p className="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis atque enim dolor. Totam iste tenetur beatae doloremque sed dignissimos commodi, sit ratione autem vero.</p>
                    <button className="btn-buy" type="button">Buy</button>
               </div>
            </header>    

         <section className="">
               <h1>Taste the Brew of Pure and Hot Delicious Coffee</h1>
               <p>you will love the smell and taste that it will make you strongly energetic</p>

           <div className="coffee-options">
              <div className="options-container">
                <img className="coffee-img " src={ProductsData[0].image} alt="products" />
             </div>
             <div className="options-container">
                <img className="coffee-img" src={ProductsData[1].image} alt="products" />
             </div>
             <div className="options-container">
                <img className="coffee-img" src={ProductsData[2].image} alt="products" />
             </div>
             <div className="options-container">
                <img className="coffee-img" src={ProductsData[3].image} alt="products" />
             </div>
             <div className="options-container">
                <img className="coffee-img" src={ProductsData[4].image} alt="products" />
             </div>
             <div className="options-container">
                <img className="coffee-img" src={ProductsData[5].image} alt="products" />
             </div>
             <div className="options-container">
                <img className="coffee-img" src={ProductsData[6].image} alt="products" />
             </div>
             <div className="options-container">
                <img className="coffee-img" src={ProductsData[8].image} alt="products" />
             </div>            
           </div>
        </section>  
      </>
   )
}
export default function Navheader() {
    const hiddenElements = document.querySelectorAll('.hidden')
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            }else {
                entry.target.classList.remove('show')
            }
        })
    })
    hiddenElements.forEach((element) => observer.observe(element))


   
    return(
    <div>
        <div className="container-header">
            
            <Nav />
            <Home />     
     </div>
            <Section />
   </div>
    )

}