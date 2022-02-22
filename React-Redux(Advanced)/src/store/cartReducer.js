const initialState = {
  items: [],
  totalAmount: 0,
  showCart: false,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_CART") {
    return {
      ...state,
      showCart: !state.showCart,
    };
  }
  if (action.type === "ADD_ITEM") {
    const itemToBeAdded = action.item;
    const itemCopy = [...state.items];
    let newItemList = [];
    let newTotalAmount = 0;
    const totalAmountCopy = state.totalAmount;
    const isItemThere = itemCopy.findIndex(
      (item) => item.id === itemToBeAdded.id
    );
    console.log("This is the findIndex", isItemThere);
    if (isItemThere >= 0) {
      //Item is There
      newItemList = itemCopy.map((item) => {
        if (item.id === itemToBeAdded.id) {
          return {
            ...item,
            amount: item.amount + 1,
            total: item.total + itemToBeAdded.price,
          };
        } else {
          return {
            item,
          };
        }
      });

      newItemList.forEach((item) => {
        newTotalAmount += item.total;
      });
    } else {
      newItemList = [...state.items, itemToBeAdded];
      newTotalAmount =
        totalAmountCopy + itemToBeAdded.price * itemToBeAdded.amount;
    }

    return {
      ...state,
      items: newItemList,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const idOfTheItemToBeRemoved = action.id;
    const price = action.price;
    console.log(price);
    console.log(idOfTheItemToBeRemoved);
    const itemCopy = [...state.items];
    let newItemList = [];
    let newTotalAmount = 0;

    const itemToBeRemoved = itemCopy.filter(
      (item) => item.id === idOfTheItemToBeRemoved
    );

    if (itemToBeRemoved) {
      if (itemToBeRemoved[0].amount === 1) {
        console.log("Coming Herer");
        newItemList = itemCopy.filter(
          (item) => item.id !== idOfTheItemToBeRemoved
        );
        console.log(newItemList);
        newItemList.forEach((item) => {
          newTotalAmount += item.total;
        });
      } else {
        newItemList = itemCopy.map((item) => {
          if (item.id === idOfTheItemToBeRemoved) {
            return {
              ...item,
              amount: item.amount - 1,
              total: item.total - price,
            };
          } else {
            return {
              ...item,
            };
          }
        });

        console.log(newItemList);

        newItemList.forEach((item) => {
          newTotalAmount += item.total;
        });
      }
    }

    return {
      ...state,
      items: newItemList,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "UPDATE_CART") {
    const itemList = action.itemList;
    let totalAmount = 0;
    itemList.forEach((item) => {
      totalAmount += item.total;
    });

    return {
      ...state,
      items: itemList,
      totalAmount: totalAmount,
    };
  }

  return state;
};

export default cartReducer;
