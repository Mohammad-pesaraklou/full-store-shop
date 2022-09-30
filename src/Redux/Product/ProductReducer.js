const initialState = {
  loading: false,
  products: [],
  error: "",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
