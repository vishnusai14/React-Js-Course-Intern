export const startCounter = () => {
  return {
    type: "START_COUNTER",
  };
};

export const reduceCounter = () => {
  return {
    type: "DEC_COUNTER",
  };
};

export const increaseCounter = (amount) => {
  return {
    type: "INC_COUNTER",
    amount,
  };
};

export const toggleCounter = () => {
  return {
    type: "TOGGLE_COUNTER",
  };
};
