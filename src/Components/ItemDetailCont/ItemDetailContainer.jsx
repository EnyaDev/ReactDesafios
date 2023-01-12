import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import { getCloth } from "../../services/mockService";

function ItemDetailContainer(){
    const [cloth, setCloth] = useState ([]);

    useEffect(() => {
        getCloth()
        .then((respuesta) => {
            setCloth(respuesta);
            })
    .catch((error) => alert(error));
    }, []);

    return(
<ItemDetail title={cloth.name} imgurl={cloth.imgurl} category={cloth.category} price={cloth.price}>
</ItemDetail>
    );
}

export default ItemDetailContainer