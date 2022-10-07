import Surreal from 'surrealdb'
import 'https://deno.land/x/dotenv@v3.2.0/load.ts'

const dbUrl = Deno.env.get('DATABASE_URL') + '/rpc'

const db = new Surreal(dbUrl, null)
await db.signin({ user: 'root', pass: 'root' })
await db.use('test', 'test')

export default db
