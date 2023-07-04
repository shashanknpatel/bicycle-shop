import {Link} from "react-router-dom";
import BicycleShop from "../images/NavbarLogo.jpg";
import { useParams } from "react-router-dom";
import data from "../data";
import { useCart } from "react-use-cart";

export default function ProductDetails() {
    const {productname} = useParams();
    const { addItem } = useCart();
    
    return(
        <div className="font-mono">

<div className="font-mono">
                <nav className="fixed top-0 left-0 right-0 flex items-center h-max mx-auto text-slate-800 bg-white text-lg shadow-md">
                    <Link to={`/`}><img className="h-16" src={BicycleShop} /></Link>
                        <ul className="flex">

                            <li className="p-4 font-semibold hover:underline decoration-dashed" ><Link to={`/`}>Home</Link></li>

                            <li className="p-4 " >
                                <Link to={`cart`} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                </Link>
                            </li>
                        </ul>
                </nav>
            </div>
            {data.filter(car => car.name === productname).map((car) => (

            <div className="pt-20 font-mono sm:flex sm:items-center" key={car.id}>
                <div className="">
                    <img className="w-full "  src={car.image} />
                </div>
                <div className="pl-5 w-auto pt-10 sm:pr-20">
                    <div className="static uppercase text-2xl font-semibold">
                        {car.name}
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
                    <div className="pt-2 space-x-1 flex">
                        <label>
                            <input className="sr-only peer" id="sm" name="size" type="radio" />
                            <label className="uppercase border-2 border-black p-2 peer-checked:bg-cyan-500" htmlFor="sm" >sm</label>
                        </label>
                        <label>
                            <input className="sr-only peer" id="md" name="size" type="radio" />
                            <label className="uppercase border-2 border-black p-2 peer-checked:bg-cyan-500" htmlFor="md" >md</label>
                        </label>
                        <label>
                            <input className="sr-only peer" id="lg" name="size" type="radio" />
                            <label className="uppercase border-2 border-black p-2 peer-checked:bg-cyan-500" htmlFor="lg" >lg</label>
                        </label>
                        <label>
                            <input className="sr-only peer" id="xl" name="size" type="radio" />
                            <label className="uppercase border-2 border-black p-2 peer-checked:bg-cyan-500" htmlFor="xl" >xl</label>
                        </label>
                    </div>
                    <div className="pt-2 static font-semibold uppercase text-black ">
                        price
                    </div>
                    <div className="space-x-1 static text-lg font-semibold uppercase text-black">
                    <span className="inline-block p-2 static font-semibold border-2 border-black">
                    &#x20B9;
                    </span>
                    <label className="inline-block p-2 static font-semibold border-2 border-black bg-cyan-500">10.00</label>
                    </div>
                    <div className="pt-4 pb-4">
                        <div
                            className="group relative inline-block focus:outline-none "
                        >
                            <span
                              className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-cyan-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>
                            <Link
                              className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                              to={`/cart`}
                              onClick={ () => addItem(car)}
                            >
                              Add to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            ))} 
        </div>
    );
}