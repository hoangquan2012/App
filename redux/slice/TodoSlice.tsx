// import { combineReducers } from "redux";

// const initState = [
//   {
//     id: 1,
//     text: "Join friend birthday Party",
//     checked: false,
//   },
//   {
//     id: 2,
//     text: "Doing house work",
//     checked: false,
//   },
//   {
//     id: 3,
//     text: "Make study plan",
//     checked: false,
//   },
// ];

// const todoReducer = (state = initState, action: any) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/deleteTodo":
//       let newList = [...state];

//       let exist = newList.findIndex((value) => value.id === action.payload);
//       console.log("exist", exist);
//       if (exist !== -1) {
//         newList.splice(exist, 1);
//       }
//       return newList;
//     default:
//       return state;
//   }
// };

// export default todoReducer;
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      text: "Join friend birthday Party",
      checked: false,
    },
    {
      id: 2,
      text: "Doing house work",
      checked: false,
    },
    {
      id: 3,
      text: "Make study plan",
      checked: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      let newList = [...state];

      let exist = newList.findIndex((value) => value.id === action.payload);
      if (exist !== -1) {
        newList.splice(exist, 1);
      }
      return newList;
    },
  },
});
