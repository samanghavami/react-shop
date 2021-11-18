import { createContext, useEffect, useState } from "react";
// API
import { getProducts } from "../Services/api";

export const productContext = createContext();

function ProductContextProvider(props) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    setProducts(await getProducts());
  };

  return (
    <productContext.Provider value={Products}>
      {props.children}
    </productContext.Provider>
  );
}

export default ProductContextProvider;
