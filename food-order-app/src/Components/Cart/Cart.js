import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          desc={item.description}
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={(id) => {
            cartCtx.removeItem(id);
          }}
          onAdd={(item) => {
            cartCtx.addItem(item);
          }}
        />
      ))}
    </ul>
  );

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  return (
    props.openCart && (
      <Modal closeModal={props.closeCartModal}>
        <div>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{`$ ${totalAmount}`}</span>
          </div>
          <div className={classes.actions}>
            <button
              onClick={props.closeCartModal}
              className={classes["button--alt"]}
            >
              Close
            </button>
            {hasItems && <button className={classes.button}>Order</button>}
          </div>
        </div>
      </Modal>
    )
  );
};

export default Cart;
