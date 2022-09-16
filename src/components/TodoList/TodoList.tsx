import React, {FC} from "react";
import {Box} from "@material-ui/core";
import TodoItem from "./TodoItem/TodoItem";
import EditTodoItem from "./EditTodoItem/EditTodoItem";
import {TodoListProps} from "../../types";

const TodoList:FC<TodoListProps> = ({todoLists, onDeleteTodo, onCheckTodo, onEditTodo, editTodoId, onChangeTodo}) => {
    return(
        <Box>
            {
                todoLists.map(todoList => {
                    if (todoList.id === editTodoId) {
                        return(
                            <EditTodoItem
                                key={todoList.id}
                                todo={todoList}
                                onChangeTodo={onChangeTodo}
                            />
                        )
                    }

                    return(
                        <TodoItem
                            key={todoList.id}
                            onDeleteTodo={onDeleteTodo}
                            todo={todoList}
                            onCheckTodo={onCheckTodo}
                            onEditTodo={onEditTodo}
                        />
                    )
                })
            }
        </Box>
    )
}

export default TodoList