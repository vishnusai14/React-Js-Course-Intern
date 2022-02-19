import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./Mealtem.module.css";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (itemNumber) => {
    cartCtx.addItem({
      name: props.name,
      id: props.id,
      description: props.desc,
      amount: itemNumber,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.rice}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm addToCart={addToCart} id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
