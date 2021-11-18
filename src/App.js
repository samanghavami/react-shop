import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
import ProductDetails from "./Component/ProductDetails";
import Store from "./Component/Store";
import CartContextProvider from "./Context/CartContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Route path="/cart" component={Cart} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
