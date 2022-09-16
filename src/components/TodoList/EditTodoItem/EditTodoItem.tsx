import React, {FC, useState} from "react";
import {Button, Paper, TextField} from "@material-ui/core";
import {EditTodoItemProps} from "../../../types";
import CheckIcon from '@mui/icons-material/Check';

const EditTodoItem:FC<EditTodoItemProps> = ({todo, onChangeTodo}) => {
    const [editTodo, setEditTodo] = useState({name: todo.name, description: todo.description})

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setEditTodo({...todo, [name]: value})
    }

    const onButtonClick = (): void => {
        onChangeTodo(editTodo)
    }

    return(
        <Paper elevation={3} style={{marginTop: '15px', padding: '20px 28px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: '2px'}}>
            <TextField name='name' label='Name' value={editTodo.name} onChange={onChange} />
            <TextField name='description' label='Description' value={editTodo.description} onChange={onChange} />

            <Button onClick={onButtonClick} variant="outlined">
                <CheckIcon fontSize='small' />
            </Button>
        </Paper>
    )
}

export default EditTodoItem