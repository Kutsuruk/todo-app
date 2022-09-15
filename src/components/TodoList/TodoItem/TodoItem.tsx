import React, {FC} from "react";
import {Box, IconButton, Paper, Typography} from "@material-ui/core";

type TodoItemProps = {
    todo: {
        id: number,
        name: string,
        description: string,
        checked: boolean
    }
}

const TodoItem:FC<TodoItemProps> = ({todo}) => {
    return(
        <Paper elevation={3} style={{marginTop: '15px', padding: '20px 28px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: '2px'}}>
            <Box>
                <Box>
                    <Typography style={{cursor: 'pointer', textDecoration: todo.checked ? 'line-through' : 'none' , margin: '0', textAlign: 'left'}} variant="h4" component="h4">
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
                <IconButton color='secondary' style={{fontSize: '15px'}} aria-label="delete">
                    Delete
                </IconButton>
            </Box>
        </Paper>
    )
}

export default TodoItem