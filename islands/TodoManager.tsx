import { useSignal } from '@preact/signals'
import CreateTodo from '../components/CreateTodo.tsx'
import TodoList from '../components/TodoList.tsx'
import type { Todo, TodoActionFn, TodoDTO } from '../types.ts'

type Props = { todos: Todo[] }

// const todos = signal<Todo[]>([]) // Not working - Maybe due to SSR

export default function TodoManager(props: Props) {
  const todos = useSignal(props.todos)

  const createTodo = ({ title }: TodoDTO) => {
    fetch('http://localhost:8000/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title }),
    })
      .then(res => res.json())
      .then((data: Todo) => (todos.value = [data, ...todos.value]))
  }

  const onTodoAction: TodoActionFn = (todo, action) => {
    if (action === 'done') {
      fetch(`http://localhost:8000/api/todos/${todo.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ done: !todo.done }),
      })
        .then(res => res.json())
        .then(
          (data: Todo) =>
            (todos.value = [
              data,
              ...todos.value.filter(it => it.id !== data.id),
            ])
        )
    }
    if (action === 'delete') {
      fetch(`http://localhost:8000/api/todos/${todo.id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then((data: Pick<Todo, 'id'>) => {
          console.log(data)
          todos.value = todos.value.filter(it => it.id !== data.id)
        })
    }
  }

  return (
    <>
      <CreateTodo onSubmit={createTodo} />
      <TodoList data={todos.value} onAction={onTodoAction} />
    </>
  )
}
