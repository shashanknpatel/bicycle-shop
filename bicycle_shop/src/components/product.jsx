import whitebicycle from "../Shoes/bicycle.jpg";
import goldbicycle from "../Shoes/goldcycle.jpg";
import redbicycle from "../Shoes/redcycle.jpg";
import cyanbicycle from "../Shoes/cyanbicycle.jpg";
import blizzard from "../Shoes/Web_MY22_Blizzard_A10_C1_Profile_2400x.jpg";
import { Link } from "react-router-dom";



export default function Product() {
  
    return(
        <section>
            <div className="px-4 py-8 mx-auto max-w-screen-xl">
                <div id="bicycleslist">
                    <span className="inline-block w-12 h-1 bg-red-700"></span>

                    <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
                        Bicycles
                    </h2>
                </div>

                <div className="pl-12 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8">
                      <Link to={"addproduct"} className="block">
                        
                        <img
                            alt="Trainer Product"
                            src={blizzard}
                            className="border-2 border-black object-cover w-5/6 -mt-3 h-80"
                        />
                         
                            <h5 className="font-bold px-px mt-4 text-sm text-black/90">
                                Blizzard Alloy 10
                            </h5>
                            <div className="px-px flex items-center justify-between mt-4 font-bold">
                                <p className="text-lg">
                                    ₹10.00
                                </p>
                            </div>
                    </Link>
                    <Link to={"addproduct"} className="block">
                        
                        <img
                            alt="Trainer Product"
                            src={whitebicycle}
                            className="border-2 border-black object-cover w-5/6 -mt-3 h-80"
                        />
                         
                            <h5 className="font-bold px-px mt-4 text-sm text-black/90">
                                White Bicycle
                            </h5>
                            <div className="px-px flex items-center justify-between mt-4 font-bold">
                                <p className="text-lg">
                                    ₹10.00
                                </p>
                            </div>
                    </Link>

                    <a to="/goldenbicycle" className="block">
                      

                      <img
                        alt="Trainer Product"
                        src={goldbicycle}
                        className="border-2 border-black object-cover w-5/6 -mt-3 h-80"
                      />

                      <h5 className="font-bold mt-4 text-sm text-black/90">
                        Golden Bicycle
                      </h5>

                      <div className="flex items-center justify-between mt-4 font-bold">
                        <p className="text-lg">
                          ₹10.00
                        </p>
                      </div>
                    </a>

                    <a to="/redbicycle" className="block">
                      

                      <img
                        alt="Trainer Product"
                        src={redbicycle}
                        className="border-2 border-black object-cover w-5/6 -mt-3 h-80"
                      />

                      <h5 className="font-bold mt-4 text-sm text-black/90">
                        Red Bicycle
                      </h5>

                      <div className="flex items-center justify-between mt-4 font-bold">
                        <p className="text-lg">
                          ₹10.00
                        </p>
                      </div>
                    </a>

                    <a to="/cyanbicycle" className="block">
                      

                      <img
                        alt="Trainer Product"
                        src={cyanbicycle}
                        className="border-2 border-black object-cover w-5/6 -mt-3 h-80"
                      />

                      <h5 className="font-bold mt-4 text-sm text-black/90">
                        Cyan Bicycle
                      </h5>

                      <div className="flex items-center justify-between mt-4 font-bold">
                        <p className="text-lg">
                          ₹10.00
                        </p>
                      </div>
                    </a>
                </div>
            </div>
        </section>

    );
}