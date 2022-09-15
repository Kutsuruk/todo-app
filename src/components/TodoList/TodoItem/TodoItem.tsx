import React, {FC} from "react";
import {Box, Paper} from "@material-ui/core";

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
        <Paper elevation={3} style={{padding: '25px 30px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: '2px'}}>

        </Paper>
    )
}

export default TodoItem