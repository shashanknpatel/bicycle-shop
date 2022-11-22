import {Link} from "react-router-dom";
import ProductQuantity from "./productquantity";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";

import blizzard10 from "../images/Web_MY22_Blizzard_A10_C1_Profile_2400x.jpg";
import blizzard20 from "../images/Web_MY22_Blizzard_A20_C1_1280x.jpg";
import blizzard30 from "../images/Web_MY22_Blizzard_C30_C1_Profile_1280x.jpg";
import { useState } from "react";
import { useCart } from "react-use-cart";

export default function ProductDetails() {
    const {productname} = useParams();
    const {addItem} = useCart();
    const [data,setData] = useState([
        {
            id:1,
            img:blizzard10,
            productname: 'blizzard alloy 10',
        },
        {
            id:2,
            img:blizzard20,
            productname:'blizzard alloy 20',
        },
        {
            id:3,
            img:blizzard30,
            productname:'blizzard alloy 30',
        },
    ])
    
    return(
        <div className="font-mono">

            <Navbar/>
            {data.filter(item => item.productname === productname).map((item) => (

            <div className="pt-20 font-mono sm:flex sm:items-center" key={item.id}>
                <div className="">
                    <img className="w-full "  src={item.img} />
                </div>
                <div className="pl-5 w-auto pt-10 sm:pr-20">
                    <div className="static uppercase text-2xl font-semibold">
                        {item.productname}
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
                    <ProductQuantity />
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
                              onClick={()=>addItem(item)}
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