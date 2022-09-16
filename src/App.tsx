import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import {Box} from "@material-ui/core";
import TodoList from "./components/TodoList/TodoList";
import {Todo} from "./types";
import classes from './App.module.scss'

function App() {
    const todoListInitialState = [
        {id: 1, name: 'task 1', description: 'Walk with a dog', checked: true},
        {id: 2, name: 'task 2', description: 'Walk with a dog Walk with a dog', checked: false},
        {id: 3, name: 'task 3', description: 'Walk with a dog Walk with a dog', checked: true}

    ]

    const [editTodoId, setEditTodoId] = useState<number | null>(null)
    const [todoLists, setTodoLists] = useState(todoListInitialState)

    const onEditTodo = (todoId: Todo['id']): void => {
        setEditTodoId(todoId)
    }

    const onDeleteTodo = (todoId: Todo['id']): void => {
        setTodoLists(todoLists.filter(todo => todo.id !== todoId))
    }

    const onAddTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>): void => {
        setTodoLists([
            ...todoLists,
            { id: Number([todoLists.length - 1]) + 1, description, name, checked: false }
        ])
    }

    const onCheckTodo = (todoId: Todo['id']) : void => {
        setTodoLists(todoLists.map(todo => {
            if(todo.id === todoId) {
                return {...todo, checked: !todo.checked}
            }
            return todo
        }))
    }

    const onChangeTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>): void => {
        setTodoLists(
            todoLists.map(todo => {
            if(todo.id === editTodoId) {
                return {...todo, name, description}
            }
            return todo
        })
        )

        setEditTodoId(null)
    }

  return (
      <div>
          <Box className={classes.mainContainer}>
              <Header todoCount={todoLists.length} />
              <Panel onAddTodo={onAddTodo} />
              <TodoList
                  onEditTodo={onEditTodo}
                  onCheckTodo={onCheckTodo}
                  onDeleteTodo={onDeleteTodo}
                  todoLists={todoLists}
                  editTodoId={editTodoId}
                  onChangeTodo={onChangeTodo}
              />
          </Box>
      </div>
  );
}

export default App;
