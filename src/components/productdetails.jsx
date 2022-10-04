import { Link } from "react-router-dom";
import BicycleShop from "../Shoes/NavbarLogo.jpg";
import whitebicycle from "../Shoes/bicycle.jpg";
import blizzard from "../Shoes/Web_MY22_Blizzard_A10_C1_Profile_2400x.jpg";
import ProductQuantity from "./productquantity";

export default function ProductDetails() {
    return(
        <div className="font-mono">

        <nav className="fixed top-0 left-0 right-0 flex items-center h-max mx-auto text-slate-800 bg-white text-lg shadow-md">
            <a href="http://localhost:3000/"><img className="h-16" src={BicycleShop} /></a>
                <ul className="flex">

                    <li className="p-4 font-semibold hover:underline decoration-dashed" ><a href="http://localhost:3000/">Home</a></li>
                    
                    <li className="p-4 " ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                    </li>
                </ul>
                
        </nav>
        
        <div className="pt-20 font-mono sm:flex sm:items-center">
        <div className="">
            <img className="w-full" src={blizzard}/>
        </div>
        <div className="pl-10 w-6/12 pt-10 sm:pr-20">
            <div className="static uppercase text-2xl font-semibold">
                Mountain bike
            </div>
            <div className="static uppercase text-lg font-semibold">
                wheel size
            </div>
            <div className="inline-block p-2 static font-semibold border-2 border-black">
                26
            </div>
            <div className="pt-2 static font-semibold uppercase text-black ">
                size
            </div>
            <div className="pt-2 space-x-1">
              <label className="uppercase border-2 border-black p-2 hover:bg-cyan-500">sm</label>
              <label className="uppercase border-2 border-black p-2 hover:bg-cyan-500">md</label>
              <label className="uppercase border-2 border-black p-2 hover:bg-cyan-500">lg</label>
              <label className="uppercase border-2 border-black p-2 hover:bg-cyan-500">xl</label>
            </div>
            <ProductQuantity/>
            <div className="pt-4 pb-4">
            <Link
                className="group relative inline-block focus:outline-none "
                to={"checkout"}
            >
                <span
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-cyan-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>
                <span
                  className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                >
                  Add to Cart
                </span>
            </Link>
            </div>
            

        </div>
        </div>
        
        </div>
    );
}