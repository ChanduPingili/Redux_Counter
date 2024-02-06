import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    }
  }
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return state = !state;
    }
  }
});


export const CounterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
// export default CounterStore;
// const counterReducer = (store = INIT_VALUE, action) => {

//   if (action.type === "INCREMENT")
//     return { ...store, counter: store.counter + 1 };
//   else if (action.type === "DECREMENT")
//     return { ...store, counter: store.counter - 1 };
//   else if (action.type === "ADDITION")
//     return { ...store, counter: store.counter + Number(action.payload) };
//   else if (action.type === "SUBSTRACTION")
//     return { ...store, counter: store.counter - Number(action.payload) };
//   else if (action.type === "TOGGLE")
//     return { ...store, privacy: !store.privacy };
//   return store;
// }
// const INIT_VALUE = {
//   counter: 0,
//   privacy: false,
// }
// export const counterStore = configureStore(counterReducer);