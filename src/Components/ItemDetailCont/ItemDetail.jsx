

function ItemDetail({title, imgurl, category, price}) {

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
        </div>
    );
}

export default ItemDetail;