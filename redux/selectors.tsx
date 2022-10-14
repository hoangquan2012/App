export const todoListSelector = (state :any) => {
    const searchText = searchTextSelector(state)

    const todoRemaining = state.todoList.filter((todo : any) => {
        return todo.text.includes(state.filter.search)
    })
    return todoRemaining
}

export const searchTextSelector = (state: any) => state.filter.search