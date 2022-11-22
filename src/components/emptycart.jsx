import { Link } from "react-router-dom";
import BicycleShop from "../images/NavbarLogo.jpg";

export default function EmptyCart() {
    return(
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
                              <span className="ml-2 text-sm"> Your cart is empty </span>
                          </h2>
                      </div>
                          
                      <div className="text-center space-y-4 pt-4">
                        <Link
                          to="/"
                          className="capitalize block w-full p-4 text-sm font-medium rounded-full bg-cyan-500 ring-2 ring-black"
                        >
                          go back to shopping
                        </Link>
                      </div>
                  </div>
              </div> 
          </>
    )
}