import type { HandlerContext } from '$fresh/server.ts'
import db from '../../../utils/db.ts'

export async function handler(req: Request, ctx: HandlerContext) {
  if (req.method === 'PATCH') {
    try {
      const { done } = await req.json()
      const updated = await db.change(ctx.params.id, { done })

      return Response.json(updated)
    } catch (error) {
      return Response.json(error)
    }
  }

  if (req.method === 'DELETE') {
    try {
      await db.delete(ctx.params.id)

      return Response.json({ id: ctx.params.id })
    } catch (error) {
      return Response.json(error)
    }
  }
}
