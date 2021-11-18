import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItem.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCount > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items :</span>
            {state.itemsCount}
          </p>
          <p>
            <span>Total Price :</span>
            {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Checkout
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              CLEAR
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <h3>Checkout Successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}

      {!state.checkout && state.itemsCount === 0 && (
        <div className={styles.complete}>
          <h3>Want Buy ?</h3>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
