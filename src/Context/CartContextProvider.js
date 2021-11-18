import { createContext, useReducer } from "react";

const initialState = {
  selectedItem: [],
  itemsCount: 0,
  total: 0,
  checkout: false,
};

const sumItem = (i) => {
  const itemsCount = i.reduce((total, product) => total + product.quantity, 0);
  let total = i
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCount, total };
};

const cartReducer = (state, action) => {
  console.log(1, state);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((i) => i.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        // selectedItem: [...state.selectedItem],
        ...sumItem(state.selectedItem),
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItem.filter(
        (i) => i.id !== action.payload.id
      );
      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...sumItem(newSelectedItem),
      };

    case "INCREMENT":
      const index = state.selectedItem.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItem[index].quantity++;
      return { ...state, ...sumItem(state.selectedItem) };

    case "DECREMENT":
      const index2 = state.selectedItem.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItem[index2].quantity--;
      return { ...state, ...sumItem(state.selectedItem) };

    case "CHECKOUT":
      return {
        selectedItem: [],
        itemsCount: 0,
        total: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItem: [],
        itemsCount: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
