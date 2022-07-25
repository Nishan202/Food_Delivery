import cssFile from "./Card.module.css";

function Card(props) {
  return <div className={cssFile.Card}>{props.children}</div>;
}

export default Card;
