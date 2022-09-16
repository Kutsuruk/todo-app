import React, {FC} from "react";
import {Box, IconButton, Paper, Typography} from "@material-ui/core";
import {Todo, TodoItemProps} from "../../../types";

const TodoItem:FC<TodoItemProps> = ({todo, onDeleteTodo, onCheckTodo, onEditTodo}) => {
    return(
        <Paper elevation={3} style={{marginTop: '15px', padding: '20px 28px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: '2px'}}>
            <Box>
                <Box>
                    <Typography onClick={() => onCheckTodo(todo.id)} style={{cursor: 'pointer', textDecoration: todo.checked ? 'line-through' : 'none' , margin: '0', textAlign: 'left'}} variant="h4" component="h4">
                        {todo.name}
                    </Typography>
                </Box>
                <Box>
                    <Typography style={{margin: '0', textAlign: 'left'}} variant="subtitle1" component="div">
                        {todo.description}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <IconButton onClick={() => onDeleteTodo(todo.id)} color='secondary' style={{fontSize: '15px'}} aria-label="delete">
                    Delete
                </IconButton>
                <IconButton onClick={() => onEditTodo(todo.id)} color='primary' style={{fontSize: '15px'}} aria-label='edit'>
                    Edit
                </IconButton>
            </Box>
        </Paper>
    )
}

export default TodoItem