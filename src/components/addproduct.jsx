
import BicycleShop from "../Shoes/NavbarLogo.jpg";
import whitebicycle from "../Shoes/bicycle.jpg";

export default function AddProduct() {
    return(
      <div className="font-mono">
      <nav className="flex items-center h-max mx-auto text-slate-800 bg-white text-lg shadow-md">
            <a href="http://localhost:3000/"><img className="h-16" src={BicycleShop} /></a>
                <ul className="flex">

                    <li className="p-4 font-semibold hover:underline decoration-dashed" ><a href="http://localhost:3000/">Home</a></li>
                    
                    <li className="p-4 " ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                    </li>
                </ul>
        </nav>
        <div className="py-10 bg-white-400 w-screen flex-auto">
        <div
  className="mx-auto my-auto block p-10 sm:px-20 border-2 border-black bg-white-900 rounded-b-xl shadow-[0_4px_0_0_rgba(0,0,0,1)] max-w-xs w-screen flex-auto"
  aria-modal="true"
  aria-label="Item added to your cart"
  role="dialog"
  tabIndex="-1"
>
  <div className="flex items-start justify-between">
    <h2 className="flex items-center text-gray-700">
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

  <div className="flex items-start pt-8 pb-12">
    <img
      alt="Tee"
      src={whitebicycle}
      className="object-cover w-16 h-16 border-2 border-black rounded-lg"
    />

    <div className="ml-4">
      <h3 className="text-sm">Basic Tee 6-Pack</h3>

      <dl className="mt-1 text-xs text-gray-500 space-y-1">
        <div>
          <dt className="inline">Size:</dt>
          <dd className="inline">XXS</dd>
        </div>

        <div>
          <dt className="inline">Color:</dt>
          <dd className="inline">White</dd>
        </div>
      </dl>
    </div>
  </div>

  <div className="text-center space-y-4">
    <a
      href="#"
      className="block p-4 text-sm border-2 border-black rounded-full hover:ring-1 hover:ring-black shadow-[0_4px_0_0_rgba(0,0,0,1)] font-medium"
    >
      View my cart (1)
    </a>

    <a
      href="https://rzp.io/l/jamFdwyi"
      className="block w-full p-4 text-sm font-medium rounded-full bg-cyan-500 ring-2 ring-black"
    >
      Checkout
    </a>
  </div>
</div>
        </div>
      </div>

    );
}