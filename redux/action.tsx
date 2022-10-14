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

export const editTodo = (data : any) => {
    return {
        type: 'todoList/editTodo',
        payload: data,
    }
}

export const searchTodo = (text : any) => {
    return {
        type: 'filter/searchFilter',
        payload: text,
    }
}