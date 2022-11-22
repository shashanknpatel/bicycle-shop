import BicycleShop from "../images/NavbarLogo.jpg";
import { useCart } from "react-use-cart";
import EmptyCart from "./emptycart";

export default function Cart() {
  const {cartTotal} = useCart();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return(<EmptyCart/>);

  return (
    <>
              <div className="font-mono">
                <nav className="fixed top-0 left-0 right-0 flex items-center h-max mx-auto text-slate-800 bg-white text-lg shadow-md">
                    <a href="http://localhost:3000/"><img className="h-16" src={BicycleShop} /></a>
                        <ul className="flex">

                            <li className="p-4 font-semibold hover:underline decoration-dashed" ><a href="http://localhost:3000/">Home</a></li>

                            <li className="p-4 underline decoration-dashed" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#06b6d4" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </li>
                        </ul>
                </nav>
            </div>
             <div className="py-10 pt-28 bg-white-400 w-screen flex-auto">
                  <div
                      className="mx-auto my-auto block p-10  border-2 border-black bg-white-900 rounded-b-xl shadow-[0_4px_0_0_rgba(0,0,0,1)] w-max w-screen flex-auto"
                      aria-modal="true"
                      aria-label="Item added to your cart"
                      role="dialog"
                      tabIndex="-1"
                  >
                      <div className="flex items-start justify-between">
                          <h2 className="flex items-center pb-2 text-gray-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                              </svg>
                              <span className="ml-2 text-sm"> Item added to your cart </span>
                          </h2>
                      </div>
                      
                        {items.map((item) => (
                          <div className="border border-black p-6 rounded-lg m-4" key={item.id} method="post" >
                      <div className="flex items-start pt-8 pb-10">
                          <img
                            src={item.image}
                            className="object-cover w-28 border-2 h-40 border-black rounded-lg"
                          />
                          <h3 className="font-semibold ml-6 capitalize">{item.name}
                          <br/>
                          <p className="capitalize pt-2">quantity:</p>
                          <div className='pt-4 space-x-1'>
                            <button className='hover:bg-cyan-500 p-2 border-2 border-black' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                            <button className='bg-cyan-500 p-2 border-2 border-black'>{item.quantity}</button>
                            <button className='p-2 hover:bg-cyan-500 border-2 border-black' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                          </div>
                          <div className="pt-2 space-x-1 static text-lg font-semibold uppercase text-black">
                          <span className="capitalize">price:</span>
                            <span className="pl-2 inline-block font-semibold">
                              &#x20B9;
                            </span>
                            <label className="inline-block font-semibold">{item.quantity * item.price}</label>
                          </div>
                          </h3>
                      </div>
  
                      <div 
                        className="text-center font-semibold border-2 border-black bg-cyan-500 rounded-full p-2"
                        onClick={() => removeItem(item.id)}
                      >
                          Delete
                      </div>
                          </div>
                        ))}
                        <p>total price</p>
                        <p>{cartTotal}</p>
                      <div className="text-center space-y-4 pt-4">
                        <a
                          href="https://rzp.io/l/jamFdwyi"
                          className="block w-full p-4 text-sm font-medium rounded-full bg-cyan-500 ring-2 ring-black"
                        >
                          Checkout
                        </a>
                      </div>
                  </div>
              </div> 
          </>
  );
}