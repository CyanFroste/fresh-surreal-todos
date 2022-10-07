import type { HandlerContext } from '$fresh/server.ts'
import db from '../../../utils/db.ts'

export async function handler(req: Request, _: HandlerContext) {
  if (req.method === 'POST') {
    try {
      const { title } = await req.json()
      const created = await db.create('todo', { title: title, done: false })

      return Response.json(created)
    } catch (error) {
      return Response.json(error)
    }
  }

  if (req.method === 'GET') {
    try {
      const todos = await db.select('todo')

      return Response.json(todos)
    } catch (error) {
      return Response.json(error)
    }
  }
}
