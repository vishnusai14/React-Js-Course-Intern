const initialState = {
  loggedIn: false,
};

const authReudcer = (state = initialState, action) => {
  if (action.type === "LOG_IN") {
    return {
      ...state,
      loggedIn: true,
    };
  }
  if (action.type === "LOG_OUT") {
    return {
      ...state,
      loggedIn: false,
    };
  }

  return state;
};

export default authReudcer;
