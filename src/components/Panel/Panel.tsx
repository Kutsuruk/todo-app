import React, {FC, useState} from "react";
import {PanelProps} from "../../types";
import {Button, makeStyles, Paper, TextField} from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';

const Panel:FC<PanelProps> = ({onAddTodo}) => {
    const [todo, setTodo] = useState({name: '', description: ''})

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setTodo({...todo, [name]: value})
    }

    const onButtonClick = (): void => {
        onAddTodo(todo)
        setTodo({name: '', description: ''})
    }

    const useStyles = makeStyles({
        panelPaperWrapper: {
            padding: '2.5% 4%',
            borderRadius: '10px',
        },
        nameField: {
            marginRight: '10px',
        },
        descriptionField: {
            marginRight: '10px',
        },
        addButton: {
            margin: '14px',
            fontSize: '0.8rem'
        }
    })
    const classes = useStyles()

    return(
        <Paper className={classes.panelPaperWrapper} elevation={3}>
            <TextField
                className={classes.nameField}
                name='name'
                label='Name'
                value={todo.name}
                onChange={onChange}
            />
            <TextField
                className={classes.descriptionField}
                name='description'
                label='Description'
                value={todo.description}
                onChange={onChange}
            />

            <Button className={classes.addButton} onClick={onButtonClick} variant="outlined">
                <AddIcon fontSize='small' />Add
            </Button>
        </Paper>
    )
}

export default Panel