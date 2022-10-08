import type { Handlers, PageProps } from '$fresh/server.ts'
import CreateTodo from '../../components/CreateTodo.tsx'
import Header from '../../components/Header.tsx'
import TodoList from '../../components/TodoList.tsx'
import type { Todo } from '../../types.ts'
import db from '../../utils/db.ts'

export const handler: Handlers<Todo[]> = {
  async GET(_, ctx) {
    const todos: Todo[] = await db.select('todo')

    return ctx.render(todos)
  },
}

export default function Home({ data }: PageProps<Todo[]>) {
  return (
    <main class="p-8 mx-auto max-w-2xl">
      <Header />
      <CreateTodo />
      <TodoList data={data} />
    </main>
  )
}
