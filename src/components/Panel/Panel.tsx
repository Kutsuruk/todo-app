import React, {FC, useState} from "react";
import {Box, Button, Paper, TextField} from "@material-ui/core";


const Panel:FC = () => {
    const [todo, setTodo] = useState({name: '', description: ''})

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setTodo({...todo, [name]: value})
    }

    const onButtonClick = (): void => {
        setTodo({name: '', description: ''})
        console.log(todo)
    }

    return(
        <Paper elevation={3} style={{padding: '25px 30px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: '2px'}}>
            <TextField name='name' label='Name' value={todo.name} onChange={onChange} />
            <TextField name='description' label='Description' value={todo.description} onChange={onChange} />

            <Button onClick={onButtonClick} variant="outlined">Add</Button>
        </Paper>
    )
}

export default Panel