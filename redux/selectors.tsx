import { createSelector } from "reselect";

export const searchTextSelector = (state: any) => state.filter.search;
export const todoListSelector = (state: any) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo: any) => {
      return todo.text.includes(searchText);
    });
  }
);
