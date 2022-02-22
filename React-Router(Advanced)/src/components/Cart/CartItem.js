import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../store/cartCreator";
const CartItem = (props) => {
  const { title, quantity, total, price, description, id } = props.item;
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      actionTypes.addItem({
        id: id,
        title: title,
        price: price,
        description: description,
        amount: 1,
      })
    );
  };

  const removeItem = () => {
    dispatch(actionTypes.removeItem(id, price));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
