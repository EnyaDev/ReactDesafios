import Button from "./NavBar/Button";

function Card(props) {
  const product = {
    price: 250,
    title: "Sleeves",
    description: "White Rabiit sleeves",
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <br />
      <img height="250px" src={props.img} alt={props.title} />
      <small>{product.description}</small>
      <h3>$ {product.price}</h3>
      <Button padding="15px" color="light blue">
      </Button>
    </div>
  );
}

export default Card;