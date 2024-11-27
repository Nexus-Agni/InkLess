import { Hono } from "hono";
import { Environment } from "..";
import { verify } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { createBlogInput, updateBlogInput } from "@nexus-agni/inklesscommon";

export const blogRouter = new Hono<Environment>();

// Authentication middleware for blog
blogRouter.use('/*', async (c, next) => {
    try {
        const header = c.req.header("Authorization");
        if (!header) {
          c.status(401);
          return c.json({ message: "Authorization header is missing" });
        }
        const token = header.split(" ")[1]; // Bearer token => ["Bearer", "token"]
        const response = await verify(token, c.env.JWT_SECRET);
        const authorId = response.id as string;
        if (!authorId) {
          c.status(409);
          return c.json({
            message: "Author Id is not found"
          });
        }
        c.set("authorId", authorId);
        await next();
    } catch (error) {
        console.error('Error during signup:', error)
        c.status(500)
        return c.json({
          message: "You are not logged in",
          error: error instanceof Error ? error.message : String(error)
        })
    }
});

// Creating a new Blog
blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const body = await c.req.json();
        const {success, error} = createBlogInput.safeParse(body);
        if (!success) {
            const formattedErrors = error.errors.map(err => ({
                path: err.path.join('.'),
                message: err.message
              }));
              c.status(411)
              return c.json({
                message: "Validation errors",
                errors: formattedErrors
              })
        }
        const { title, content } = body;

        const authorId = c.get("authorId");

        await prisma.blog.create({
            data: {
                title,
                content,
                authorId: authorId
            }
        });

        return c.json({
            status: 201,
            message: "Blog created successfully"
        });
    } catch (error) {
        console.error('Error creating blog:', error);
        c.status(500);
        return c.json({
            status: 500,
            message: "Internal Server Error",
            error: error instanceof Error ? error.message : String(error)
        });
    } finally {
        await prisma.$disconnect();
    }
});

// Updating Blog route by id
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const authorId = c.get("authorId");

    try {
        const body = await c.req.json();
        const {success, error} = updateBlogInput.safeParse(body);
        if (!success) {
            const formattedErrors = error.errors.map(err => ({
                path: err.path.join('.'),
                message: err.message
              }));
              c.status(411)
              return c.json({
                message: "Validation errors",
                errors: formattedErrors
              })
        }
        const { id,title, content} = body;

        if (!id) {
            c.status(400);
            return c.json({
                message: "Id is required"
            });
        }
        if (!title && !content) {
            c.status(400);
            return c.json({
                message: "Either title or content is required"
            });
        }
        
        // TODO : Make sure that either title or content can be updated or both can be updated

        const response = await prisma.blog.update({
            where: {
                id: id,
                authorId : authorId
            }, 
            data: {
                title: title,
                content: content
            }, 
            select: {
                title: true,
                content: true
            }
        })

        c.status(200);
        return c.json({
            message: "Blog updated successfully",
            data: response
        })
    } catch (error) {
        c.status(500);
        return c.json({
            message: "Error while updating blog",
            error: error instanceof Error ? error.message : String(error)
        })
    } finally {
        await prisma.$disconnect();
    }
})


// Getting all Blogs
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    // TODO : Add pagination
    try {
        const response = await prisma.blog.findMany({
            select: {
                title: true,
                content: true, 
                author : {
                    select: {
                        name: true
                    }
                }
            }
        })

        // if no blogs found
        if (response.length === 0) {
            c.status(404);
            return c.json({
                message: "No blogs found"
            })
        }

        c.status(200);
        return c.json({
            message: "Blogs fetched successfully",
            data: response
        })
    } catch (error) {
        c.status(500);
        return c.json({
            message: "Error while fetching all the blogs",
            error: error instanceof Error ? error.message : String(error)
        })
    }
})

// get a blog by id
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const id = c.req.param('id');
    
    try {
        const response = await prisma.blog.findUnique({
            where: {
                id: id
            },
            select: {
                title: true,
                content: true, 
                author : {
                    select: {
                        name: true
                    }
                }
            }
        })

        if (!response) {
            c.status(404);
            return c.json({
                message: "Blog with this id not found"
            })
        }

        c.status(200);
        return c.json({
            message: "Blog fetched successfully",
            data: response
        })
    } catch (error) {
        c.status(500);
        return c.json({
            message: "Error while fetching blog",
            error: error instanceof Error ? error.message : String(error)
        })
    }
})