import {Link} from "react-router-dom";

import blizzard10 from "../images/Web_MY22_Blizzard_A10_C1_Profile_2400x.jpg";
import blizzard20 from "../images/Web_MY22_Blizzard_A20_C1_1280x.jpg";
import blizzard30 from "../images/Web_MY22_Blizzard_C30_C1_Profile_1280x.jpg";


export default function Products() {
    const data = [
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
    ]

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
