import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import axios from "axios";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as actionTypes from "./store/cartCreator";

let initial = true;

function App() {
  const showCart = useSelector((state) => state.showCart);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const [notificationState, setNotoficationState] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://react-js-course-intern-default-rtdb.firebaseio.com/cart.json"
      )
      .then((res) => {
        dispatch(actionTypes.updateCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    setNotoficationState({
      title: "Pending",
      message: "Waiting for the Response",
      status: "pending",
    });

    axios
      .put(
        "https://react-js-course-intern-default-rtdb.firebaseio.com/cart.json",
        items
      )
      .then((res) => {
        setNotoficationState({
          title: "Success",
          message: "Cart Updated Succesfully",
          status: "success",
        });
      })
      .catch((err) => {
        setNotoficationState({
          title: "Failed",
          message: "Someting went wrong",
          status: "error",
        });
      });
  }, [items]);
  return (
    <Layout>
      {notificationState && (
        <Notification
          title={notificationState.title}
          status={notificationState.status}
          message={notificationState.message}
        />
      )}
      {showCart && <Cart />}

      <Products />
    </Layout>
  );
}
export default App;
