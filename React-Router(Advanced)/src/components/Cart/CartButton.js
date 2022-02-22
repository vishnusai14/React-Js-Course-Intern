import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/cartCreator";
const CartButton = (props) => {
  const disatch = useDispatch();
  const showCart = () => {
    disatch(actionTypes.toggleCart());
  };
  const items = useSelector((state) => state.items);

  let noOfItems = 0;
  items.forEach((item) => {
    noOfItems += item.amount;
  });
  return (
    <button onClick={showCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
