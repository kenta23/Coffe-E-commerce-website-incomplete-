import React from "react";
import Navheader from "./NavbarHeader";
import Navbar from "./Navbar";
import { Link,Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Products() {

   
    return(  
        <>
         <div className="product-nav">
            <div className="product-links">
                  <div className="logo-product">
                     <h2>Coffee drill</h2>
                  </div>

                  <ul>
                     <Link to='/'><li>Home</li></Link>
                     <Link to='/'><li>About</li></Link>
                     <Link to='/products'><li>Products</li></Link>
                     <Link to=''><li>Stores</li></Link>
                  </ul>
            </div>
         </div>
         
         
         <div className="container-product">     
           <div className="image-header">   
           </div>
           <button type="button">Click here</button>
         </div> 

         <div className="container-menu">
           <p>Menu</p>
           <input type="text" placeholder="search our drinks, foods"/>
         </div>

         <div className="container-main-menu">
            <div className="menulist">
                <h3 className="Drinks">Drinks</h3>
                <div className="List-drinks">
                    <p>brewed coffee</p>
                    <p>featured drinks</p>
                    <p>seasonal</p>
                    <p>espresso</p>
                    <p>frappucino</p>
                    <p>iced tea</p>
                </div>
            </div>

            <div className="product-section">
                <div className="food-images">
                   <div className="products-info">
                      <img src="src/assets/1.jpg" alt="" />
                      <div className="name-product">Product 1</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/2.jpg" alt="" />
                      <div className="name-product">Product 2</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/3.jpg" alt="" />
                      <div className="name-product">Product 3</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/4.jpg" alt="" />
                      <div className="name-product">Product 4</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/5.jpg" alt="" />
                      <div className="name-product">Product 5</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/6.jpg" alt="" />
                      <div className="name-product">Product 6</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/7.jpg" alt="" />
                      <div className="name-product">Product 7</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/8.jpg" alt="" />
                      <div className="name-product">Product 8</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/9.jpg" alt="" />
                      <div className="name-product">Product 9</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/1.jpg" alt="" />
                      <div className="name-product">Product 10</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/2.jpg" alt="" />
                      <div className="name-product">Product 11</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/3.jpg" alt="" />
                      <div className="name-product">Product 12</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/4.jpg" alt="" />
                      <div className="name-product">Product 13</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/5.jpg" alt="" />
                      <div className="name-product">Product 14</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/6.jpg" alt="" />
                      <div className="name-product">Product 15</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/7.jpg" alt="" />
                      <div className="name-product">Product 16</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/8.jpg" alt="" />
                      <div className="name-product">Product 17</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/9.jpg" alt="" />
                      <div className="name-product">Product 18</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/7.jpg" alt="" />
                      <div className="name-product">Product 19</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/8.jpg" alt="" />
                      <div className="name-product">Product 20</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/9.jpg" alt="" />
                      <div className="name-product">Product 21</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/9.jpg" alt="" />
                      <div className="name-product">Product 22</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/7.jpg" alt="" />
                      <div className="name-product">Product 23</div>
                   </div>
                   <div className="products-info">
                      <img src="src/assets/8.jpg" alt="" />
                      <div className="name-product">Product 24</div>
                   </div>


                </div>
            </div>
         </div>
      
     
       </>
    ) 
}

