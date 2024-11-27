import z from "zod";

// Signup 
export const signupInput = z.object({
    name : z.string().optional(),
    email : z.string().email().min(1, "Email is required"),
    password : z.string().min(1, "Password is required")
})

export type SignupInput = z.infer<typeof signupInput>

//Signin
export const signinInput = z.object({
    email : z.string().email().min(1, "Email is required"),
    password : z.string().min(1, "Password is required")
})

export type SigninInput = z.infer<typeof signinInput>

// Create Blog 
export const createBlogInput = z.object({
    title : z.string().min(1, "Title is required"),
    content : z.string().min(1, "Content is required")
})

export type CreateBlogInput = z.infer<typeof createBlogInput>

// Update Blog
export const updateBlogInput = z.object({
    id : z.string().min(1, "Id is required"),
    title : z.string().min(1, "Title is required"),
    content : z.string().min(1, "Content is required")
})

export type UpdateBlogInput = z.infer<typeof updateBlogInput>