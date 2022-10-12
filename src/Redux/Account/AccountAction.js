const addItemAccount = (product) => {
  return {
    type: "ADD_ITEM_ACCOUNT",
    payload: product,
  };
};
const removeItemAccount = (product) => {
  return {
    type: "REMOVE_ITEM_ACCOUNT",
    payload: product,
  };
};

export { addItemAccount, removeItemAccount };
