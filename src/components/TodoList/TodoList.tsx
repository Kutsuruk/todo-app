import React, {FC} from "react";
import {Box} from "@material-ui/core";
import TodoItem from "./TodoItem/TodoItem";
import {Todo} from "../../App";
import editTodoItem from "./EditTodoItem/EditTodoItem";
import EditTodoItem from "./EditTodoItem/EditTodoItem";

type TodoListProps = {
    todoLists: Todo[],
    onDeleteTodo: (id: Todo['id']) => void,
    onCheckTodo: (id: Todo['id']) => void,
    onEditTodo: (id: Todo['id']) => void,
    editTodoId: number | null,
    onChangeTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void
}

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