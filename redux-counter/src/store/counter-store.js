import { createStore } from "redux";
const INIT_VALUE = {
  counter: 0,
  privacy: false,
}
const counterReducer = (store = INIT_VALUE, action) => {
  
  if (action.type === "INCREMENT")
    return { ...store, counter: store.counter + 1 };
  else if (action.type === "DECREMENT")
    return { ...store, counter: store.counter - 1 };
  else if (action.type === "ADDITION")
    return { ...store, counter: store.counter + Number(action.payload) };
  else if (action.type === "SUBSTRACTION")
    return { ...store, counter: store.counter - Number(action.payload) };
  else if (action.type === "TOGGLE")
    return { ...store, privacy: !store.privacy };
  return store;
}

export const counterStore = createStore(counterReducer);