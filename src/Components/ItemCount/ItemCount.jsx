import { useState } from 'react';

function ItemCount(){
    const [count,setCount] = useState(0)

    function handleClick(){

    }

    return(
        <div>
            Add to Cart 
            <p>Cantidad de clicks: {clicks}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default ItemCount