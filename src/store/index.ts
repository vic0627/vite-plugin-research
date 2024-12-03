import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;

type State = ReturnType<typeof store.getState>;

export const useSelector = <T>(selector: (state: State) => T) => selector(store.getState());
