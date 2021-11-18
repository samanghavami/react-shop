import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
import shopIcon from "../assets/icons/shop.svg";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={shopIcon} alt="shopIcon" />
          </Link>
          <span>{state.itemsCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
