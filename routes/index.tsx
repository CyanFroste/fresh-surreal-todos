import type { Handlers, PageProps } from '$fresh/server.ts'
import Header from '../components/Header.tsx'
import TodoManager from '../islands/TodoManager.tsx'
import type { Todo } from '../types.ts'

export const handler: Handlers<Todo[]> = {
  async GET(_, ctx) {
    const res = await fetch(`http://localhost:8000/api/todos`)
    const json = await res.json()

    return ctx.render(json as Todo[])
  },
}

export default function Home({ data }: PageProps<Todo[]>) {
  return (
    <main class="p-8 mx-auto max-w-2xl">
      <Header />
      <TodoManager todos={data} />
    </main>
  )
}
