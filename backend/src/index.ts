import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { hash } from "bcryptjs"
import { sign } from 'hono/jwt'

const app = new Hono<{
  Bindings : {
    DATABASE_URL: string,
    JWT_SECRET : string
  }
}>()

//SignUp Route
app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const { name, email, password } = await c.req.json()

    if (!name || !email || !password) {
      return c.json({
        status: 400,
        message: "All fields are required"
      })
    }

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email }
    })

    if (existingUser) {
      return c.json({
        status: 409,
        message: "User with same email already exists"
      })
    }

    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })

    const token = sign({
      id: user.id
    }, c.env.JWT_SECRET)

    return c.json({
      status: 200,
      message: "User created successfully",
      jwt: token
    })
  } catch (error) {
    console.error('Error during signup:', error)
    c.status(500)
    return c.json({
      status: 500,
      message: "Internal Server Error",
      error: (error as any).message 
    })
  } finally {
    await prisma.$disconnect()
  }
})


app.post ('/api/v1/signin', (c) => {
  return c.text("Sign In Method")
})

app.post ('/api/v1/blog', (c) => {
  return c.text("Post Blog Method")
})

app.put ('/api/v1/blog', (c) => {
  return c.text("Update Blog Method")
})

app.get ('/api/v1/blog/:id', (c) => {
  return c.text("Get the blogs Method")
})


export default app
