import BicycleShop from "../images/NavbarLogo.jpg";
import { useCart } from "react-use-cart";
import EmptyCart from "./emptycart";
import { Link } from "react-router-dom";

import { useEffect } from "react";

export default function Cart() {

  const updateAmount = async (cartTotal) => {
    
    const response = await fetch('http://localhost:3001/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "amount": cartTotal })
    });
    const data = await response.json();
    console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      
      order_id: data.id,
      
      
      prefill: {
        name: "",
        email: "",
        contact: "",
      },

      success: "http://localhost:3000/payment/success",
      
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      };
      
      useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
      });

      

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart();

      if (isEmpty) return(<EmptyCart/>);

    return(
        <>
            <div className="font-mono">
                <nav className="fixed top-0 left-0 right-0 flex items-center h-max mx-auto text-slate-800 bg-white text-lg shadow-md">
                    <Link to={`/`}><img className="h-16" src={BicycleShop} /></Link>
                        <ul className="flex">
                            <li className="p-4 font-semibold hover:underline decoration-dashed" ><Link to={`/`}>Home</Link></li>
                            <li className="p-4 underline decoration-dashed" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#06b6d4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </li>
                        </ul>
                </nav>
                <div className="pt-28">
                    <div className="grid text-lg font-semibold grid-cols-3 pt-4 pl-4 gap-x-8 lg:pl-14">
                    <h1 className="border-b-2 border-dashed border-black capitalize">shopping cart</h1>
                    <h1 className="border-b-2 border-dashed border-black capitalize">quantity</h1>
                    <h1 className="border-b-2 border-dashed border-black capitalize">price</h1>
                    </div>

                    {items.map((item)=> (
                        <div key={item.id}>
                            <div className="flex grid grid-cols-3 pt-4 pl-4 gap-x-10 border-b-2 lg:pl-14">
                                <div className="pb-4">
                                    <img className="object-cover w-28 border-2 h-32 border-black" src={item.image} />
                                </div>
                                <div className='w-28 pt-10 space-x-1'>
                                    <button className='hover:bg-cyan-500 p-2 border-2 border-black' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <button className='bg-cyan-500 p-2 border-2 border-black'>{item.quantity}</button>
                                    <button className='p-2 hover:bg-cyan-500 border-2 border-black' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <div className="space-x-1 static text-lg font-semibold uppercase text-black pt-10">
                                        &#x20B9;
                                    <label className="inline-block p-2 static font-semibold">{item.quantity * item.price}</label>
                                </div>
                            </div>
                        </div>  
                    ))}
                    <div className="flex pl-32 lg:pl-96 capitalize text-lg font-semibold pt-2 grid-cols-2">
                                <h1 className="lg:pl-80">total price:</h1>
                                <h1 className="pl-4 lg:pl-16">&#x20B9; {cartTotal}</h1>
                    </div>
                    <div className="text-center px-14 space-y-4 lg:pl-96 py-10">
                        <button
                          onClick={() => updateAmount(cartTotal)}
                          className="uppercase block w-60 p-2 font-semibold text-lg mb-10 bg-cyan-500 ring-2 ring-black"
                        >
                          Checkout
                        </button>
                      </div>
                </div>
            </div>
        </>
    )
}