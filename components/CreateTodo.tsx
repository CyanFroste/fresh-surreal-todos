import type { TodoDTO } from '../types.ts'

type Props = { onSubmit: (value: TodoDTO) => void }

export default function CreateTodo({ onSubmit }: Props) {
  return (
    <form
      class="flex gap-4 bg-green-50 p-4 mb-6 rounded"
      onSubmit={event => {
        event.preventDefault()

        const title = (
          event.currentTarget.elements.namedItem('title') as HTMLInputElement
        ).value

        if (!title.trim()) return

        onSubmit({ title })
      }}
    >
      <input type="text" name="title" class="py-2 px-4 w-full" />
      <button class="py-2 px-4 bg-green-500 text-white text-sm font-semibold rounded">
        Create
      </button>
    </form>
  )
}
