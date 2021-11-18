const shortName = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = `${splitTitle[0]} ${splitTitle[1]}`;
  return newTitle;
};

const isInCart = (state, id) => {
  const result = !!state.selectedItem.find((i) => i.id === id);
  return result;
};

const Quantity = (state, id) => {
  const index = state.selectedItem.findIndex((i) => i.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItem[index].quantity;
  }
};

export { shortName, isInCart, Quantity };
