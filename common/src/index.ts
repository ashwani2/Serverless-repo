import z from "zod";

//for sign up
export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

//for sign In
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

//for create blog
export const createBlogInput = z.object({
  ttile: z.string(),
  content: z.string(),
});

//for update blog
export const updateBlogInput = z.object({
  ttile: z.string(),
  content: z.string(),
  id: z.string(),
});

// type inference in zod
export type SignupInput = z.infer<typeof signupInput>;
export type SignInInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
