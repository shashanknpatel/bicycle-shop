import {Link} from "react-router-dom";
import {data} from "../data";

export default function Products() {

    return(
               
            <>
                {data.map((item) => (
                    <Link
                        to={`/products/${item.productname}`}
                        key={item.id}
                        className="block"
                    >
                        
                        <img
                            alt="Trainer Product"
                            
                            src={item.img}
                            className="border-2 border-black object-cover w-5/6 -mt-3 h-80"
                        />
                         
                            <h5 className="uppercase font-bold px-px mt-4 text-sm text-black/90">
                                {item.productname}
                            </h5>
                            <div className="px-px flex products-center justify-between mt-4 font-bold">
                                <p className="text-lg">
                                    ₹10.00
                                </p>
                            </div>
                    </Link>
                ))}
            </>         
    );
}
