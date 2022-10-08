import type { HandlerContext } from '$fresh/server.ts'
import db from '../../../utils/db.ts'

export async function handler(req: Request, _: HandlerContext) {
  if (req.method === 'POST') {
    try {
      const formData = await req.formData()
      const title = formData.get('title') as string | null

      if (title?.trim()) {
        await db.create('todo', { title: title, done: false })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return Response.redirect(req.headers.get('origin') + '/ssr')
}
