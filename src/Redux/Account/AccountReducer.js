const initialState = {
  selectedItems: [],
  itemsCounter: 0
};


const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_ACCOUNT":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        checkOut: false,
      };
    case "REMOVE_ITEM_ACCOUNT":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };
    default:
      return state;
  }
};

export default AccountReducer;
