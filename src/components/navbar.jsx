import { Outlet,Link } from "react-router-dom";
import BicycleShop from "../Shoes/NavbarLogo.jpg";
import bluebicycle from '../Shoes/bluebicycle_medium.jpg';

export default function Navbar() {
    return (
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
        <div>
            <Outlet/>
        </div>
        <div>
                <img className="pt-16" src={bluebicycle} />
        </div>
        </div>
    );
}