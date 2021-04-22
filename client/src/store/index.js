import { createStore } from "redux";

export function changeLocation(payload) {
  return { type: "LOCATION/CHANGELOCATION", payload };
}

export function addToCart(payload) {
  console.log(payload, "dari store");
  return { type: "CART/CHANGECART", payload };
}

const initialState = {
  location: "",
  cart: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOCATION/CHANGELOCATION":
      return { ...state, location: payload };
    case "CART/CHANGECART":
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
