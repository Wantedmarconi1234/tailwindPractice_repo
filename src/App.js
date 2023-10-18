import React from "react"
import photo1 from "../src/images/image-product-desktop.jpg";
import photo2 from "../src/images/image-product-mobile.jpg";

function App() {
  
  return (
    <div className="mx-3 my-3 flex flex-col h-screen md:flex-row">
      <div className=" h-full w-full">
        <img src={photo2} alt="#" className="h-full w-screen rounded-l  sm:block"/>        
        {/* <img src={photo1} alt="#" className="h-full w-screen rounded-l invisible"/>         */}
      </div>
      <div className=" bg-white h-full w-full rounded-r py-12 px-12">
        <p className="uppercase tracking-widest mb-7 text-projcolor-grayishBlue">perfume</p>
        <h1 className="capitalize font-bold text-3xl pb-5">gabrielle essence eau de parfum</h1>
        <p className="text-base pb-6 text-projcolor-grayishBlue">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creater for the House of CHANEL</p>
        <div className="mb-10 flex w-32 justify-between items-center">
          <div className="text-3xl mr-5 font-bold text-projcolor-darkCyan">$149.99</div>
          <p className="text-sm line-through text-projcolor-grayishBlue">$169.99</p>
        </div>
        <button className="bg-red-200 w-full py-3.5 rounded bg-projcolor-darkCyan text-white">Add to Cart</button>
      </div>
    </div>
  ); 
}

export default App;
