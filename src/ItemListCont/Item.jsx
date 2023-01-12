import {useState} from "react";

import Button from "./NavBar/Button";

function Item(props) {
    const {title, price, imgurl,category} = props.item;

    return (
        <div className="item-card">
            <div className="item-card-header">
            <h2>{title}</h2>
            </div>
            <div className="item-card-img">
            <img src={imgurl} alt={title}></img>
            </div>
            <div className="item-card-detail">
            <h3>${price}</h3>
            <small>{category}</small>
            </div>
            <Button padding="22px" color="violet">See More..</Button>
            <br></br>
        </div>
    );
}

export default Item;