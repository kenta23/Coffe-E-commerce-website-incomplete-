import React from "react"
import Navheader from "./NavbarHeader"
import Section from "./Section"
import Products from "./Products"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
/*<Navheader />
<Section />   */

function App() {
    return( 
       <main>
                
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navheader />} />
                <Route path="products" element={<Products />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          
       
        </main>
     
    )
}

export default App
