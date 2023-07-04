import { useState } from "react";

export default function ProductQuantity() {
    const [count, setCount] = useState(1);
    return(
        <div className='pt-4 space-x-1'>
            <button className='hover:bg-cyan-500 p-2 border-2 border-black' onClick={() => count > 0 ? setCount(prevCount => prevCount - 1) : setCount(0)}>-</button>
            <button className='bg-cyan-500 p-2 border-2 border-black'>{count}</button>
            <button className='p-2 hover:bg-cyan-500 border-2 border-black' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
}