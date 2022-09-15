import React, {FC} from "react";
import {Box} from "@material-ui/core";
import TodoItem from "./TodoItem/TodoItem";
import {Todo} from "../../App";

type TodoListProps = {
    todoLists: Todo[]
}

const TodoList:FC<TodoListProps> = ({todoLists}) => {
    return(
        <Box>
            {
                todoLists.map(todoList => <TodoItem key={todoList.id} todo={todoList} />)
            }
        </Box>
    )
}

export default TodoList