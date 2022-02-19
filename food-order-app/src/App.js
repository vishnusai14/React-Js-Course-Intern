import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartModal = () => {
    setOpenCart(true);
  };

  const closeCartModal = () => {
    setOpenCart(false);
  };
  return (
    <CartProvider>
      <Cart
        openCartModal={openCartModal}
        closeCartModal={closeCartModal}
        openCart={openCart}
      />
      <Header openCartModal={openCartModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
