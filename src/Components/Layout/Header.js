import { Fragment } from "react";
import foodImage from "../../Photos/Delicious_food.jpg";
import cssFile from "./Header.module.css";
import HeadCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      {" "}
      {/* A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. */}
      <header className={cssFile.header}>
        {" "}
        {/* call a css module from the css file */}
        <h1>React Meals</h1>
        <HeadCartButton />
      </header>
      <div className={cssFile["main-image"]}>
        {" "}
        {/* when css file name have in between ( - ) then use [class name] instead of using . notation */}
        <img src={foodImage} alt="a table full of food" />
      </div>
    </Fragment>
  );
}
export default Header;
