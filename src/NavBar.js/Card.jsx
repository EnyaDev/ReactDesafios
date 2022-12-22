import Button from "./NavBar/Button";

function Card(props) {
  console.log(props);

  return (
    <div>
      <h3>{props.title}</h3>
      <br />
      <img height="250px" src={props.img} alt={props.title} />
      <h3>$ {props.price}</h3>
      <small>{props.detail}</small>
      <Button padding="15px" color="light blue">
        See more..
      </Button>
    </div>
  );
}

export default Card;