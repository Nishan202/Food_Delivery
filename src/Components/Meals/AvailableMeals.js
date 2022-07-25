import cssFile from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./Items";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={cssFile.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
