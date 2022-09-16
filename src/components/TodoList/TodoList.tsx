import React, {FC} from "react";
import {Box} from "@material-ui/core";
import TodoItem from "./TodoItem/TodoItem";
import {Todo} from "../../App";

type TodoListProps = {
    todoLists: Todo[],
    onDeleteTodo: (id: Todo['id']) => void,
    onCheckTodo: (id: Todo['id']) => void,
}

const TodoList:FC<TodoListProps> = ({todoLists, onDeleteTodo, onCheckTodo}) => {
    return(
        <Box>
            {
                todoLists.map(todoList => <TodoItem
                    key={todoList.id}
                    onDeleteTodo={onDeleteTodo}
                    todo={todoList}
                    onCheckTodo={onCheckTodo}
                />)
            }
        </Box>
    )
}

export default TodoList