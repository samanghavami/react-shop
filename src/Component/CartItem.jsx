import { CartContext } from "../Context/CartContextProvider";
import { useContext } from "react";
import { shortName } from "../helpers/Functions";
import Trash from "../assets/icons/trash.svg";

import styles from "./CartItem.module.css";

function CartItem({ data }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={data.image} alt="product" />
      <div className={styles.data}>
        <h3>{shortName(data.title)}</h3>
        <h3>{data.price}</h3>
      </div>
      <div>
        <span className={styles.quantity}>{data.quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {data.quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREMENT", payload: data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <img src={Trash} alt="Trash" style={{ width: "20px" }} />
          </button>
        )}

        <button onClick={() => dispatch({ type: "INCREMENT", payload: data })}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
