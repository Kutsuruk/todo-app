import React, {FC} from "react";
import {Box, makeStyles} from "@material-ui/core";
import TodoItem from "./TodoItem/TodoItem";
import EditTodoItem from "./EditTodoItem/EditTodoItem";
import {TodoListProps} from "../../types";

const TodoList:FC<TodoListProps> = ({
        todoLists,
        onDeleteTodo,
        onCheckTodo,
        onEditTodo,
        editTodoId,
        onChangeTodo}) => {

    const useStyles = makeStyles({
        todoListWrapper: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '40%',
            width: '100%'
        }
    })

    const classes = useStyles()

    return(
        <Box className={classes.todoListWrapper}>
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