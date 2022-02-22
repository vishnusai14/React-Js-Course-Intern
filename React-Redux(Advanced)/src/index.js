import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import App from "./App";
import cartReducer from "./store/cartReducer";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
