import React, {FC} from "react";
import {Box} from "@material-ui/core";
import TodoItem from "./TodoItem/TodoItem";

const todoLists = [
    {id: 1, name: 'task 1', description: 'Walk with a dog', checked: true},
    {id: 2, name: 'task 2', description: 'Walk with a dogWalk with a dogWalk with a dog', checked: false},
    {id: 3, name: 'task 3', description: 'Walk with a dogWalk with a dog', checked: true}

]

type TodoListProps = {
    id: number,
    description: string,
    checked: boolean
}

const TodoList:FC = () => {
    return(
        <Box>
            {
                todoLists.map(todoList => <TodoItem todo={todoList} />)
            }
        </Box>
    )
}

export default TodoList