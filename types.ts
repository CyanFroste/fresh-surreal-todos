export type Todo = {
  id: string
  title: string
  done: boolean
}

export type TodoDTO = { title: string }

export type TodoActionFn = (data: Todo, action: 'done' | 'delete') => void