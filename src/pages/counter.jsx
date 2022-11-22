import { useState } from "react";
import Cart from "../components/cart";
import ProductQuantity from "../components/productquantity";

export default function Counter() {
    const [count, setCount] = useState(1);

    function removeCount() {
        return(
            () => count > 0 ? setCount(prevCount => prevCount - 1) : setCount(0)
        );
    }

    function addCount() {
        return(
            () => setCount(prevCount => prevCount + 1)
        );
    }
    return(
        <>
            <ProductQuantity count={count} addCount={addCount} removeCount={removeCount} />
            <Cart count={count} />
        </>
    );
}
