import React, {FC} from "react";
import {Box, IconButton, makeStyles, Paper, Typography} from "@material-ui/core";
import {TodoItemProps} from "../../../types";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const TodoItem:FC<TodoItemProps> = ({
        todo,
        onDeleteTodo,
        onCheckTodo,
        onEditTodo}) => {

    const useStyles = makeStyles({
        todoItemWrapper: {
            marginTop: '15px',
            padding: '20px 28px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            gap: '2px'
        },
        todoItemNameField: {
            cursor: 'pointer',
            margin: '0',
            textAlign: 'left',
            textDecoration: todo.checked ? 'line-through' : 'none',
        },
        todoItemDescriptionField: {
            margin: '0',
            textAlign: 'left',
        },
    })

    const classes = useStyles();


    return(
        <Paper elevation={3} className={classes.todoItemWrapper}>
            <Box>
                <Box>
                    <Typography
                        className={classes.todoItemNameField}
                        onClick={() => onCheckTodo(todo.id)}
                        variant="h4"
                        component="h4"
                    >
                        {(todo.name).charAt(0).toUpperCase() + (todo.name).slice(1)}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        className={classes.todoItemDescriptionField}
                        variant="subtitle1"
                        component="div"
                    >
                        {(todo.description).charAt(0).toUpperCase() + (todo.description).slice(1)}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <IconButton
                    onClick={() => onDeleteTodo(todo.id)}
                    color='secondary'
                    aria-label="delete"
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    onClick={() => onEditTodo(todo.id)}
                    color='primary'
                    aria-label='edit'
                >
                    <EditIcon />
                </IconButton>
            </Box>
        </Paper>
    )
}

export default TodoItem