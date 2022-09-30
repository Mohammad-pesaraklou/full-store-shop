import axios from "axios";

const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
  };
};
const fetchSuccess = (product) => {
  return {
    type: "FETCH_SUCCESS",
    payload: product,
  };
};
const fetchFailure = (error) => {
  return {
    type: "FETCH_FAILURE",
    payload: error,
  };
};

const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios.get("https://fakestoreapi.com/products")
        .then(response => {
            const products = response.data
            dispatch(fetchSuccess(products))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchFailure(errorMsg))
        })
  };
};

export {fetchProduct}