import type { HandlerContext } from '$fresh/server.ts'
import db from '../../../utils/db.ts'

export async function handler(req: Request, ctx: HandlerContext) {
  if (req.method === 'POST') {
    const formData = await req.formData()
    const method = formData.get('_method')

    if (method === 'PATCH') {
      try {
        const done = formData.get('done')
        await db.change(ctx.params.id, { done })
      } catch (error) {
        console.error(error)
      }
    }

    if (method === 'DELETE') {
      try {
        await db.delete(ctx.params.id)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return Response.redirect(req.headers.get('origin') + '/ssr')
}
