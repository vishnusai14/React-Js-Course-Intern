import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import Counter from "./components/Counter";
import authReudcer from "./store/authReducer";
import counterReducer from "./store/counterReducer";
import Auth from "./components/Auth";

const configureStore = combineReducers({
  counter: counterReducer,
  auth: authReudcer,
});

const store = createStore(configureStore);

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Auth />
    </Provider>
  );
}

export default App;
