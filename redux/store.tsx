// import { createStore} from "redux";
// import rootReducer from "./reducer";

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./slice/FilterSlice";
import TodoSlice from "./slice/TodoSlice";

const store = configureStore({
  reducer: {
    filter: FilterSlice.reducer,
    todoList: TodoSlice.reducer,
  },
});
export default store;