import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shortName, isInCart, Quantity } from "../helpers/Functions";
import { CartContext } from "../Context/CartContextProvider";
import Trash from "../assets/icons/trash.svg";
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <Link to={`/products/${productData.id}`}>
        <img
          className={styles.cardImage}
          src={productData.image}
          alt={productData.title}
        />
      </Link>
      <h3>{shortName(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {Quantity(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "DECREMENT", payload: productData })
              }
            >
              -
            </button>
          )}

          {Quantity(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={Trash} alt="Trash" style={{ width: "20px" }} />
            </button>
          )}

          {Quantity(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {Quantity(state, productData.id)}
            </span>
          )}

          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "INCREMENT", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
