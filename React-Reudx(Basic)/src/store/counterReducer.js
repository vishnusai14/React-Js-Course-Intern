const initialState = {
  counter: 0,
  showCounter: false,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "START_COUNTER") {
    console.log("Start Counter");
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "DEC_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "TOGGLE_COUNTER") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

export default counterReducer;
