import { combineReducers } from "redux";

const initState = {
  filter: {
    search: "",
    status: "",
  },
  todoList: [
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
};

const rootReducer = (state = initState, action: any) => {
    
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "todoList/deleteTodo":
      let newList = [...state.todoList];

      let exist = newList.findIndex(value => value.id === action.payload);
      console.log('exist' , exist)
      if (exist !== -1) {
        newList.splice(exist, 1)
      }
      return {
        ...state,
        todoList: newList,
      };
    default:
      return state;
  }
};

export default rootReducer;
