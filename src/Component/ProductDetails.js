import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Context/ProductContextProvider";
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const data = useContext(productContext);
  const id = props.match.params.id;
  const product = data[id - 1];

  if (product) {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={product.image} alt={product.title} />
        <div className={styles.textContainer}>
          <h3>{product.title}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.category}>
            <span>Category: </span>
            {product.category}
          </p>
          <div className={styles.buttonContainer}>
            <span className={styles.price}>{product.price} $</span>
            <Link to="/products">Back to shop</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
};

export default ProductDetails;
