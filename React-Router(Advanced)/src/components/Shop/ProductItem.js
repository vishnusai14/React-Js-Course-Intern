import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import * as actionTypes from "../../store/cartCreator";
import { useDispatch } from "react-redux";
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const item = {
      id: id,
      title: title,
      price: price,
      description: description,
      amount: 1,
      total: price,
    };
    dispatch(actionTypes.addItem(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
