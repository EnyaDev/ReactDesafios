import styles from "./button.css";
import "./button.css";

export default function Button(props){
  return(
    <button style={styleButton} className={styles.btn}>{props.children} See more..</button>
  )
};

const styleButton = {
   
  };
