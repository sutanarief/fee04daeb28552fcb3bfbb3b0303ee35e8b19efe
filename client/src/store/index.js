import { createStore } from "redux";

export function changeLocation(payload) {
  return { type: "LOCATION/CHANGELOCATION", payload };
}

function reducer(state = { location: "" }, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOCATION/CHANGELOCATION":
      return { ...state, location: payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
