export const toggleCart = () => {
  return {
    type: "TOGGLE_CART",
  };
};

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    item,
  };
};

export const removeItem = (id, price) => {
  return {
    type: "REMOVE_ITEM",
    id,
    price,
  };
};

export const updateCart = (itemList) => {
  return {
    type: "UPDATE_CART",
    itemList,
  };
};
