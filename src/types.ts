export type Todo = {
    id: number,
    name: string,
    description: string,
    checked: boolean
}

export type EditTodoItemProps = {
    todo: Todo,
    onChangeTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void,
}

export type PanelProps = {
    onAddTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void
}

export type TodoListProps = {
    todoLists: Todo[],
    onDeleteTodo: (id: Todo['id']) => void,
    onCheckTodo: (id: Todo['id']) => void,
    onEditTodo: (id: Todo['id']) => void,
    editTodoId: number | null,
    onChangeTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void
}

export type TodoItemProps = {
    todo: Todo,
    onDeleteTodo: (id: Todo['id']) => void,
    onCheckTodo: (id: Todo['id']) => void,
    onEditTodo: (id: Todo['id']) => void,
}

export type HeaderProps = {
    todoCount: number
}