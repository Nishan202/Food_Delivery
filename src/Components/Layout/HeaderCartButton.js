import CartIcon from "../Cart/CartIcon";
import cssFile from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={cssFile.button}>
      <span className={cssFile.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cssFile.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
