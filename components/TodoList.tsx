import type { Todo, TodoActionFn } from '../types.ts'

type Props = {
  data: Todo[]
  onAction?: TodoActionFn
}

export default function TodoList({ data, onAction }: Props) {
  return (
    <div class="flex flex-col gap-2">
      {data.map(todo => (
        <div class="p-4 bg-gray-50 rounded flex" key={todo.id}>
          <div
            class={`w-full ${todo.done ? 'text-green-600' : 'text-gray-900'}`}
          >
            {todo.title}
          </div>
          <div class="flex gap-2">
            <form
              method="POST"
              action={`/ssr/todos/${todo.id}`}
              onSubmit={event => {
                if (!onAction) return
                event.preventDefault()
                onAction(todo, 'done')
              }}
            >
              <input name="_method" type="text" hidden value="PATCH" />
              <input name="done" type="checkbox" hidden checked={!todo.done} />
              <button class="font-semibold text-sm">
                {todo.done ? 'Open' : 'Close'}
              </button>
            </form>
            <form
              method="POST"
              action={`/ssr/todos/${todo.id}`}
              onSubmit={event => {
                if (!onAction) return
                event.preventDefault()
                onAction(todo, 'delete')
              }}
            >
              <input name="_method" type="text" hidden value="DELETE" />
              <button class="font-semibold text-sm pl-2 border-l-2 text-red-500">
                Delete
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  )
}
