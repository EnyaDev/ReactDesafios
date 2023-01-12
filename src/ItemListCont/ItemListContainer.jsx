import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "./Flex/Flex";
import getProducts from "../../services/mockService";

function ItemListContainer(){
    const [clothes, setClothes] = useState ([]);

    useEffect(() => {
        getProducts()
        .then((respuesta) => {
            setClothes(respuesta);
            })
    .catch((error) => alert(error));
    }, []);

    return (
    <Flex>
        {clothes.map((itemIterado) => {
            return (
                <Item id={itemIterado.id} key={itemIterado.id} item={itemIterado.id} />
            );
        })}
    </Flex>
);

}

export default ItemListContainer
