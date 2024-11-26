import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import bcrypt from 'bcryptjs'
import { sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

// Auth Middleware 
app.use('/api/v1/blog/*', async (c, next) => {
  const header = c.req.header("Authorization")

  if (!header) {
    c.status(401)
    return c.json({ message: "Authorization header is missing" })
  }
  const token = header.split(" ")[1] //Bearer token => ["Bearer", "token"]
  const response = await verify(token, c.env.JWT_SECRET);
  if(response.id) {
    next()
  } else {
    c.status(403)
    return c.json({
      message : "Unauthorized access"
    })
  }
})

//Signup API
app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try {

    const body = await c.req.json()

    const { name, email, password } = body

    if (!name || !email || !password) {
      c.status(400)
      return c.json({
        message: "All fields are required"
      })
    }

    const existingUser = await prisma.user.findFirst({
      where: { email }
    })

    if (existingUser) {
      c.status(409)
      return c.json({
        message: "User with same email already exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    })

    const token = await sign({
      id: user.id
    }, c.env.JWT_SECRET)

    c.status(200)
    return c.json({
      message: "User created successfully",
      jwt: token
    })
  } catch (error) {
    console.error('Error during signup:', error)
    c.status(500)
    return c.json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : String(error)
    })
  } finally {
    await prisma.$disconnect()
  }
})

// Signin API
app.post('/api/v1/signin', async (c) => {

  const body = await c.req.json()
  const { email, password } = body

  if (!email || !password) {
    c.status(400)
    return c.json({
      message: "All fields are required"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const user = await prisma.user.findFirst({
    where : {
      email : email,
    }
  })

  if(!user) {
    c.status(404)
    return c.json({
      message : "No user found with this email"
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user?.password)

  if (!isPasswordValid) {
    c.status(401)
    return c.json({
      message : "Incorrect Password"
    })
  }

  const token = await sign({
    id : user.id
  }, c.env.JWT_SECRET)

  c.status(200)
  return c.json({
    message : `Welcome ${user.name}, signed in successfully`,
    jwt : token
  })
})

export default app