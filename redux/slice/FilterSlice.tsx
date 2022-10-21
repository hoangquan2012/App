// import { combineReducers } from "redux";

// const initState = {
//   search: "",
//   status: "",
// };

// const filterRuducer = (state = initState, action: any) => {
//   switch (action.type) {
//     case "filter/searchFilter":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterRuducer;
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    search: "",
  },
  reducers: {
    searchFilter: (state , action) => {
      state.search = action.payload
    }
  }
});
