import React, {FC} from "react";
import {Box} from "@material-ui/core";
import TodoItem from "./TodoItem/TodoItem";
import {Todo} from "../../App";

type TodoListProps = {
    todoLists: Todo[],
    onDeleteTodo: (id: Todo['id']) => void,
}

const TodoList:FC<TodoListProps> = ({todoLists, onDeleteTodo}) => {
    return(
        <Box>
            {
                todoLists.map(todoList => <TodoItem onDeleteTodo={onDeleteTodo} key={todoList.id} todo={todoList} />)
            }
        </Box>
    )
}

export default TodoList