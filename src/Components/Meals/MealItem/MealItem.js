import cssFile from "./MealItem.module.css";

function MealItem(props) {
  //const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={cssFile.meal}>
      <div>
        <h3 className={cssFile["meal h3"]}>{props.name}</h3>
        <div className={cssFile.description}>{props.description}</div>
        <div className={cssFile.price}><b>₹</b>{props.price}</div>
      </div>
      <div></div>
    </li>
  );
}
export default MealItem;
