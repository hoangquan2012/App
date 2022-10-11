export const addTodo = (data : any) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const deleteTodo = (data : any) => {
    return {
        type: 'todoList/deleteTodo',
        payload: data,
    }
}
