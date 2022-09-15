import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import {Box} from "@material-ui/core";
import TodoList from "./components/TodoList/TodoList";
import todoList from "./components/TodoList/TodoList";

export type Todo = {
    id: number,
    name: string,
    description: string,
    checked: boolean
}

function App() {
    const [todoLists, setTodoLists] = useState([
        {id: 1, name: 'task 1', description: 'Walk with a dog', checked: true},
        {id: 2, name: 'task 2', description: 'Walk with a dogWalk with a dogWalk with a dog', checked: false},
        {id: 3, name: 'task 3', description: 'Walk with a dogWalk with a dog', checked: true}

    ])

    const onDeleteTodo = (todoId: Todo['id']): void => {
        setTodoLists(todoLists.filter(todo => todo.id !== todoId))
    }

  return (
      <div>
          <Box style={{width: '50%'}} display='flex' flexDirection='column'>
              <Header />
              <Panel />
              <TodoList onDeleteTodo={onDeleteTodo} todoLists={todoLists} />
          </Box>
      </div>
  );
}

export default App;
