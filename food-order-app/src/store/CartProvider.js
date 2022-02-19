import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    console.log(action);
    const isItemExist = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existItem = state.items[isItemExist];
    let updatedItem;
    let updatedItems;

    if (existItem) {
      updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[isItemExist] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    console.log(totalAmount);
    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const isItemExist = state.items.findIndex((item) => item.id === action.id);
    const existItem = state.items[isItemExist];
    let updatedItem;
    let updatedItems;

    if (existItem.amount > 1) {
      updatedItem = {
        ...existItem,
        amount: existItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[isItemExist] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    const totalAmount = state.totalAmount - existItem.price;

    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD_ITEM", item });
  };

  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
