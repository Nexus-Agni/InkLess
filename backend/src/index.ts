import { Hono } from 'hono'
import { userRouter } from './router/user.route'
import { blogRouter } from './router/blog.route'

export type Environment = {
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }, 
  Variables : {
    authorId : string
  }
}

const app = new Hono<Environment>()


// User Routes
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)


export default app