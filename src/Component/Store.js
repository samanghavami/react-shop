import { useContext } from "react";
import { productContext } from "../Context/ProductContextProvider";
import Product from "./Product";
import styles from "./Store.module.css";

function Store() {
  const products = useContext(productContext);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
}

export default Store;
