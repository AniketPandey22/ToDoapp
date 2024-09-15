import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        title: "Buy milk",
        completed: false
    }],
    addTodo: (title) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
    updateTodo: (id, title) => { }

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider