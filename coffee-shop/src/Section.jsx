import React from "react";


function Section() {
  return(

    <div className="about">
         <div className="container-about hidden">
           <div className="left-content">
               <img className="img-about" src="src/assets/coffeebean.jpg" alt="" />
           </div>
           <div className="right-content">
             <h2 className="title-about">Our Coffee are made out of pure Coffee beans</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste inventore nisi voluptatum alias dolore pariatur amet architecto molestias nostrum in! Cum eaque dicta itaque commodi quibusdam laborum.</p>
             <br />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque veritatis expedita minima corrupti porro!</p>
             <button className="btn-about" type="button">Click here </button>
           </div>
         </div>

      <div className="container-about2 hidden">
         <div className="left-content2">
             <h2  className="title-about">Want to Checkout our products?</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eum, assumenda eius iure repudiandae fuga inventore ea iusto sint quidem, enim incidunt velit hic porro ex magni modi earum ad?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tenetur itaque voluptatem! Error velit id fugit nesciunt vel, dolorem earum.</p>          
         </div>
         <div className="right-content2">
            <div className="border">
               <img className="bordered-img img-about" src="/src/assets/machine.jpg" alt="" />
            </div>

            <div>
              <button type="button">Click</button>
            </div>
         </div>
      </div>
        
    </div>
    
  )
}

export default Section